<script lang="ts">
    interface Props {
        color?: number;
        chroma?: number;
    }

    const defaultChroma = 0.15;

    let {
        color = $bindable(250),
        chroma = $bindable(defaultChroma)
    }: Props = $props();

    let colorRef: HTMLButtonElement;
    let chromaRef: HTMLButtonElement;

    let activeUpdateFn: ((event: PointerEvent) => void) | null = null;

    function pointerColorUpdate(event: PointerEvent) {
        updateColor(event);
        activeUpdateFn = updateColor;

        window.addEventListener('pointermove', updateColor);
        window.addEventListener('pointerup', stopDragging, { once: true });
    }

    function pointerChromaUpdate(event: PointerEvent) {
        updateChroma(event);
        activeUpdateFn = updateChroma;

        window.addEventListener('pointermove', updateChroma);
        window.addEventListener('pointerup', stopDragging, { once: true });
    }

    function updateColor(event: PointerEvent) {
        if (!colorRef) return;

        const rect = colorRef.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
        if (angle < 0) angle += 360;

        color = Math.round(angle);
    }

    function updateChroma(event: PointerEvent) {
        if (!chromaRef) return;

        const rect = chromaRef.getBoundingClientRect();
        
        const xPos = event.clientX - rect.left;
        const normalized = Math.min(Math.max(xPos / rect.width, 0), 1);

        const maxChroma = 0.4;
        chroma = Number((normalized * maxChroma).toFixed(3));
    }

    function stopDragging() {
        if (activeUpdateFn) {
            window.removeEventListener('pointermove', activeUpdateFn);
            activeUpdateFn = null;
        }
    }
</script>

<div class="wrapper">
    <button 
        title="Color Picker Button"
        type="button"
        bind:this={colorRef} 
        class="square button-reset" 
        onpointerdown={pointerColorUpdate}
    >
        <div class="color-picker"> </div>
    </button>

    <button 
        title="Chroma Picker Button"
        type="button"
        bind:this={chromaRef} 
        class="rectangle button-reset" 
        onpointerdown={pointerChromaUpdate}
    >
        <div class="chroma-picker"> </div>
    </button>

    <span>
        <div class="text-picker">angle: {color}</div>
        <div class="text-picker">chroma: {chroma}</div>
    </span>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: var(--size-s4);
    }

    .text-picker {
        color: var(--text-muted);
        font-size: 13px;
    }

    .square {
        width: 100px;
        height: 100px;
        background-color: var(--bg-app-variant);
        overflow: hidden;
        transform: translateZ(0); 
    }

    .rectangle {
        width: 100px;
        height: 15px;
        background-color: var(--bg-app-variant);
        overflow: hidden;
    }

    .color-picker {
        width: 100%;
        height: 100%;
        background:
            conic-gradient(
                from 0deg in oklch longer hue,
                oklch(35% calc(var(--primary-base-chroma)*0.8) 0deg),
                oklch(35% calc(var(--primary-base-chroma)*0.8) 360deg)
            );
        filter: blur(10px);
        transform: scale(1.3);
        pointer-events: none;
    }

    .chroma-picker {
        width: 100%;
        height: 100%;
        background:
            linear-gradient(
                90deg,
                oklch(35% calc(var(--primary-base-chroma)*0) var(--hue-primary)),
                oklch(35% calc(var(--primary-base-chroma)*1) var(--hue-primary))
            );
        pointer-events: none;
    }
</style>
