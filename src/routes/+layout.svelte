<script lang="ts">
    import '$lib/styles/tokens.css';
    import '$lib/styles/base.css';

    import ColorPicker from '$lib/internal/ColorPicker.svelte';

    let color = $state(250);
    let chroma = $state(0.15);

    let { children } = $props();

    $effect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--hue-primary', `${color}deg`);
            document.documentElement.style.setProperty('--primary-base-chroma', `${chroma}`);
        }
    });
</script>

<ColorPicker bind:color bind:chroma />

{@render children?.()}
