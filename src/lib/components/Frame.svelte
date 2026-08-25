<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        variant?: 'default' | 'secondary';
        transparent?: boolean;
        outline?: boolean;
        children?: Snippet;
    }

    let {
        variant = 'default',
        transparent = false,
        outline = false,
        children
    }: Props = $props();

</script>

<div class={`frame frame-${variant} ${transparent ? 'transparent' : ''} ${outline ? 'outline' : ''}`}>
    {@render children?.()}
</div>

<style>
    .frame {
        padding: calc((var(--size-s3) + 1.5*var(--size-s2))/2) var(--size-s2);
        background-color: var(--bg-app-variant);
        border-radius: var(--size-s3);
        color: white;
    }

    .outline {
        border: 1px solid var(--border-strong);
    }

    .frame-secondary {
        background-color: var(--bg-secondary);
        border-color: var(--border-secondary);
    }

    .transparent {
        background-color: transparent;
    }
</style>
