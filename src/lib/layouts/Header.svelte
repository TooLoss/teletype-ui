<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Size } from '$lib/types.ts';
    import Flex from './Flex.svelte';

    type Props = HTMLAttributes<HTMLElement> & {
        children?: Snippet;
        top?: Size;
    };

    let {
        children,
        top = "zero",
        ...rest
    }: Props = $props();
</script>

<header class="header-container" style={`padding-bottom: var(--size-${top})`} {...rest}>
    {@render children?.()}
</header>

<style>
    .header-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 94vh;
        min-height: 94dvh;
        width: 100%;
        box-sizing: border-box;
    }
</style>
