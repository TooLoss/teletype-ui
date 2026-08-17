<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Size } from '$lib/types.ts';
    import type * as CSS from 'csstype';
    import Flex from './Flex.svelte';

    type Props = HTMLAttributes<HTMLElement> & {
        gap?: Size;
        align?: CSS.Properties['alignItems'];
        children?: Snippet;
    };

    let {
        gap = 's3',
        align = 'stretch',
        children,
        ...rest
    }: Props = $props();
</script>

<!-- Use Flex to align items vertically -->

<Flex direction="column" align={align} gap={gap} style="padding: var(--size-s1) 0" {...rest}>
    {@render children?.()}
</Flex>
