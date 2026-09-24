<script lang="ts">
    import Frame from '../components/Frame.svelte';
    import Stack from '../layouts/Stack.svelte';

    interface Props {
        color?: number;
        chroma?: number;
    }

    let {
        color = $bindable(250),
        chroma = $bindable(0.15)
    }: Props = $props();
</script>

<div class="square">
    <div class="picker">
    </div>
</div>

<style>
    .square {
        width: 100px;
        height: 100px;
        background-color: var(--bg-app-variant);
        overflow: hidden;
        transform: translateZ(0); 
    }

    .picker {
        width: 100%;
        height: 100%;
        background:
            conic-gradient(
                from 0deg in oklch longer hue,
                oklch(70% 0.25 0deg),
                oklch(70% 0.25 360deg)
            );
        filter: blur(10px);
        transform: scale(1.3);
    }
</style>
