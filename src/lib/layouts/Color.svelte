<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import Stack from './Stack.svelte';

    type Props = HTMLAttributes<HTMLElement> & {
        children?: Snippet;
        color?: string;
    };

    let {
        children,
        color = "--bg-app-variant",
        ...rest
    }: Props = $props();
</script>

<!-- This layout doesn't change align behavior, it just color the background -->

<div style={`width: 100%;  background-color: var(${color}); margin-bottom: calc(var(--size-s1)*0.75);`}>
    <Stack>
        {@render children?.()}
    </Stack>
</div>
