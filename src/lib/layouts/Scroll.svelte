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
        children,
        style: customStyle,
        ...rest
    }: Props = $props();
</script>

<div 
    class="scroll-container"
    class:has-fade={fade}
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
        width: calc(100% + 20px);
        max-width: calc(100% + 20px);
        margin-inline: -10px;
        min-width: 0;
        overflow: hidden;
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
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        scrollbar-width: thin;
        -webkit-overflow-scrolling: touch;
        padding: 2px 10px;
        box-sizing: border-box;
    }

    :global(.scroll-content > *) {
        flex-shrink: 0;
    }

    /* hide cursor if touchscreen device */
    @media (pointer: coarse), (hover: none) {
        :global(.scroll-content) {
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        :global(.scroll-content)::-webkit-scrollbar {
            display: none;
        }
    }
</style>

