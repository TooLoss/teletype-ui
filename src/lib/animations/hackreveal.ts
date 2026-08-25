import { observeInView, type InViewOptions } from '../utils/inView';
import { easings, type EasingName } from '../utils/ease';

export interface HackReveal {
    duration?: number;
    delay?: number;
    easing?: EasingName;
    randomList?: string;
    trigger?: 'inView' | 'mount' | 'manual';
    inViewOptions?: InViewOptions;
    onComplete?: () => void;
}

export function hackreveal(node: HTMLElement, options: HackReveal = {}) {
    let {
        duration = 1000,
        delay = 0,
        easing = 'easeOutQuad',
        randomList = '&$@|/}{*%#[]()!?',
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

    function getRandomString(length: number, chars = randomList) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    function play() {
        cleanupTimers();
        node.textContent = getRandomString(totalChars, randomList);

        if (totalChars === 0) {
            onComplete?.();
            return;
        }

        const easeFn = easings[easing] ?? ((t: number) => t);

        timeoutId = setTimeout(() => {
            let startTime: number | null = null;

            function step(currentTime: number) {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easedProgress = easeFn(progress);
                const targetCharCount = Math.floor(easedProgress * totalChars);

                const randomText = getRandomString(totalChars - targetCharCount, randomList);
                const revealedText = originalText.slice(0, targetCharCount);
                node.textContent = `${revealedText}${randomText}`;

                if (progress < 1) {
                    rafId = requestAnimationFrame(step);
                } else {
                    node.textContent = originalText;
                    cleanupTimers();
                    onComplete?.();
                    node.dispatchEvent(
                        new CustomEvent('hackreveal_complete', {
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
        play,
        update(newOptions: HackReveal) {
            duration = newOptions.duration ?? duration;
            delay = newOptions.delay ?? delay;
            easing = newOptions.easing ?? easing;
            randomList = newOptions.randomList ?? randomList;
        },
        destroy() {
            cleanupTimers();
            inViewWatcher?.destroy();
        }
    };
}
