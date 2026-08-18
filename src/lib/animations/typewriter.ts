// src/lib/actions/typewriter.ts
import { observeInView, type InViewOptions } from '../utils/inView';
import { easings, type EasingName } from '../utils/ease';

export interface TypewriterOptions {
    duration?: number;
    delay?: number;
    easing?: EasingName;
    trigger?: 'inView' | 'mount' | 'manual';
    inViewOptions?: InViewOptions;
    onComplete?: () => void;
}

export function typewriter(node: HTMLElement, options: TypewriterOptions = {}) {
    let {
        duration = 1000,
        delay = 0,
        easing = 'easeOutQuad',
        trigger = 'inView',
        inViewOptions = { threshold: 0.2, once: true },
        onComplete
    } = options;

    const originalText = node.textContent?.trim() || '';
    const totalChars = originalText.length;
    const avgSpeed = totalChars > 0 ? duration / totalChars : 0;

    let rafId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let hasPlayed = false;

    function cleanupTimers() {
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (timeoutId !== null) clearTimeout(timeoutId);
    }

    function play() {
        cleanupTimers();
        node.textContent = '⠀';

        if (totalChars === 0) {
            onComplete?.();
            return;
        }

        const easeFn = easings[easing] ?? easings.linear ?? ((t: number) => t);

        timeoutId = setTimeout(() => {
            let startTime: number | null = null;
            let lastRenderedIndex = 0;

            function step(currentTime: number) {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easedProgress = easeFn(progress);
                const targetCharCount = Math.floor(easedProgress * totalChars);

                if (targetCharCount !== lastRenderedIndex) {
                    node.textContent = originalText.slice(0, targetCharCount);
                    lastRenderedIndex = targetCharCount;
                }

                if (progress < 1) {
                    rafId = requestAnimationFrame(step);
                } else {
                    node.textContent = originalText;
                    cleanupTimers();
                    onComplete?.();
                    node.dispatchEvent(
                        new CustomEvent('typewriter_complete', {
                            detail: { duration, avgSpeed, totalChars }
                        })
                    );
                }
            }

            rafId = requestAnimationFrame(step);
        }, delay);
    }

    if (trigger === 'inView' || trigger === 'manual') {
        node.textContent = '';
    }

    let inViewWatcher: ReturnType<typeof observeInView> | null = null;

    if (trigger === 'mount') {
        play();
    } else if (trigger === 'inView') {
        inViewWatcher = observeInView(node, {
            ...inViewOptions,
            onEnter: (entry) => {
                if (!hasPlayed || !inViewOptions.once) {
                    hasPlayed = true;
                    play();
                }
                inViewOptions.onEnter?.(entry);
            }
        });
    }

    return {
        update(newOptions: TypewriterOptions) {
            duration = newOptions.duration ?? 1000;
            delay = newOptions.delay ?? 0;
            easing = newOptions.easing ?? 'easeOutQuad';
        },
        destroy() {
            cleanupTimers();
            inViewWatcher?.destroy();
        }
    };
}
