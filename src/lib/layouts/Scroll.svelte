<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Size } from '../index.ts';
    import Flex from './Flex.svelte';
    import type * as CSS from 'csstype';

    type Props = HTMLAttributes<HTMLElement> & {
        padding?: Size;
        margin?: Size;
        fade?: boolean;
        fadeSize?: string;
        gap?: Size;
        align?: CSS.Properties['alignItems'];
        justify?: CSS.Properties['justifyContent'];
        center?: boolean;
        hidebar?: boolean;
        children?: Snippet;
    };

    let {
        padding,
        margin,
        fade = true,
        fadeSize = '0.5rem',
        gap = "s3",
        align = "stretch",
        justify = 'flex-start',
        center = true,
        hidebar = false,
        children,
        style: customStyle,
        ...rest
    }: Props = $props();
</script>

<div 
    class="scroll-container"
    class:has-fade={fade}
    class:no-scrollbar={hidebar}
    style:--fade-size={fadeSize}
>
    <Flex 
        direction="row" 
        {padding} 
        {margin} 
        {gap} 
        {align} 
        {justify} 
        {center} 
        wrap={false}
        class="scroll-content"
        style={customStyle}
        {...rest}
    >
        {@render children?.()}
    </Flex>
</div>

<style>
    .scroll-container {
        position: relative;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: thin;
        -webkit-overflow-scrolling: touch;
    }

    .no-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .has-fade {
        --mask: linear-gradient(
            to right,
            transparent 0,
            black var(--fade-size, 1rem),
            black calc(100% - var(--fade-size, 1rem)),
            transparent 100%
        );
        -webkit-mask-image: var(--mask);
        mask-image: var(--mask);
    }

    :global(.scroll-content) {
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
        min-width: 100%;
        max-width: none;
        box-sizing: border-box;
        padding-bottom: 8px;
    }

    :global(.scroll-content > *) {
        flex-shrink: 0;
        min-width: 0;
    }

    @media (pointer: coarse), (hover: none) {
        .scroll-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
            display: none;
        }
    }
</style>
