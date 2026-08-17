<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Size } from '$lib/types.ts';
    import type * as CSS from 'csstype';

    type Props = HTMLAttributes<HTMLElement> & {
        padding?: Size;
        margin?: Size;
        gap?: Size;
        direction?: CSS.Properties['flexDirection'];
        align?: CSS.Properties['alignItems'];
        justify?: CSS.Properties['justifyContent'];
        wrap?: boolean;
        children?: Snippet;
    };

    let {
        padding,
        margin,
        gap = "s3",
        direction = "row",
        align = "stretch",
        justify = 'flex-start',
        wrap = true,
        children,
        style: customStyle,
        ...rest
    }: Props = $props();
</script>

<!-- Flexbox align items horizontally or vertically -->

<div
    style={`
        display: flex;
        ${padding ? `padding: var(--size-${padding});` : ''}
        ${margin ? `margin: var(--size-${margin});` : ''}
        margin-inline: auto;
        width: 100%;
        gap: var(--size-${gap});
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
        flex-wrap: ${wrap ? "wrap" : "nowrap"};
        max-width: var(--stack-max-width);
        ${customStyle ?? ''}
    `}
    {...rest}
>
    {@render children?.()}
</div>
