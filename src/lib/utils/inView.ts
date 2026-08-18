// Check if an element is in view to launch actions

export interface InViewOptions {
    threshold?: number | number[];
    rootMargin?: string;
    once?: boolean;
    onEnter?: (entry: IntersectionObserverEntry) => void;
    onLeave?: (entry: IntersectionObserverEntry) => void;
}

export function observeInView(node: HTMLElement, options: InViewOptions = {}) {
    const { threshold = 0.2, rootMargin = '0px', once = true, onEnter, onLeave } = options;

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                onEnter?.(entry);
                node.dispatchEvent(new CustomEvent('inview_enter', { detail: entry }));
                if (once) {
                    observer.unobserve(node);
                }
            } else {
                onLeave?.(entry);
                node.dispatchEvent(new CustomEvent('inview_leave', { detail: entry }));
            }
        }
    }, { threshold, rootMargin });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}

export function inView(node: HTMLElement, options: InViewOptions = {}) {
    let watcher = observeInView(node, options);

    return {
        update(newOptions: InViewOptions) {
            watcher.destroy();
            watcher = observeInView(node, newOptions);
        },
        destroy() {
            watcher.destroy();
        }
    };
}
