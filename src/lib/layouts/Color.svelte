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
        ...rest
    }: Props = $props();
</script>

<div 
    class="color"
    {...rest}
>
    <Stack>
        {@render children?.()}
    </Stack>
</div>

<style>
    .color {
        width: 100%;
        margin-bottom: calc(var(--size-s1)*0.75);
        background-color: var(--bg-app-variant);
    }
</style>
