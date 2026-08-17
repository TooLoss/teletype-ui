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
        padding: var(--size-s2);
        background-color: var(--bg-app-variant);
        border-radius: var(--size-s3);
        color: var(--bg-app);
    }

    .outline {
        border: 1px solid var(--border-strong);
    }

    .frame-variant {
        background-color: var(--color-secondary-800);
        border-color: var(--color-secondary-300);
    }

    .transparent {
        background-color: transparent;
    }
</style>
