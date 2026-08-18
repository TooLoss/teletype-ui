<script lang="ts">
    import type { Snippet } from 'svelte';
    import Flex from './Flex.svelte';

    type Props = HTMLAttributes<HTMLElement> & {
        padding?: Size;
        margin?: Size;
        gap?: Size;
        align?: CSS.Properties['alignItems'];
        justify?: CSS.Properties['justifyContent'];
        center?: boolean;
        children?: Snippet;
    };

    let {
        padding,
        margin,
        gap = "s3",
        align = "stretch",
        justify = 'flex-start',
        center = true,
        children,
        style: customStyle,
        ...rest
    }: Props = $props();
</script>

<Flex direction="row" {padding} {margin} {gap} {align} {justify} {center} wrap={false}
    style={`
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        width: 100%;
        scrollbar-width: thin;
        -webkit-overflow-scrolling: touch;
        max-width: 100%;
        min-width: 0;
    `}
    {...rest}
>
    {@render children?.()}
</Flex>
