<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Size } from '$lib/types.ts';
    import type * as CSS from 'csstype';
    import Flex from './Flex.svelte';

    type PaddingVariant = 'none' | 'normal' | 'horizontal' | 'vertical';

    type Props = HTMLAttributes<HTMLElement> & {
        gap?: Size;
        paddingVertical?: Size;
        paddingHorizontal?: Size;
        paddingDirection?: PaddingVariant;
        align?: CSS.Properties['alignItems'];
        children?: Snippet;
    };

    let {
        gap = 's3',
        paddingVertical = 's1',
        paddingHorizontal = 's3',
        paddingDirection = 'normal',
        align = 'stretch',
        style,
        children,
        ...rest
    }: Props = $props();

    const paddingMap: Record<PaddingVariant, string> = $derived({
        none: '0',
        normal: `calc(var(--size-${paddingVertical}) * 0.75) var(--size-${paddingHorizontal})`,
        horizontal: `0 var(--size-${paddingHorizontal})`,
        vertical: `calc(var(--size-${paddingVertical}) * 0.75) 0`,
    });

    let paddingStyle = $derived(paddingMap[paddingDirection] ? `padding: ${paddingMap[paddingDirection]};` : '');
    let combinedStyle = $derived([paddingStyle, style].filter(Boolean).join(' '));
</script>

<!-- Use Flex to align items vertically -->

<Flex 
    direction="column" 
    {align} 
    {gap} 
    style={combinedStyle || undefined} 
    {...rest}
>
    {@render children?.()}
</Flex>

