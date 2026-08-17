<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

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

<div style={`width: 100%;  background-color: var(${color});`}>
    {@render children?.()}
</div>
