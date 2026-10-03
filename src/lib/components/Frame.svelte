<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        variant?: 'default' | 'secondary' | 'subtle';
        padding?: 'zero' | 'small' | 'default';
        transparent?: boolean;
        outline?: boolean;
        effect?: boolean;
        children?: Snippet;
    }

    let {
        variant = 'default',
        padding = 'default',
        transparent = false,
        outline = false,
        effect = false,
        children,
        ...rest
    }: Props = $props();

</script>

<div class={`
    frame
    frame-${variant}
    padding-${padding}
    ${transparent ? 'transparent' : ''}
    ${outline ? 'outline' : ''}
    ${effect ? `effect-${variant}` : ''}
`} {...rest}>
    {@render children?.()}
</div>

<style>
    .frame {
        background-color: var(--bg-app-variant);
        border-radius: var(--border-radius);
        color: white;
    }

    .padding-default {
        padding: calc((var(--size-s3) + 1.5*var(--size-s2))/2) var(--size-s2);
    }

    .padding-small {
        padding: calc((var(--size-s4) + 1.5*var(--size-s3))/2) var(--size-s2);
    }

    .padding-zero {
        padding: 0;
    }

    .outline {
        border: 2px solid var(--border-strong);
    }

    .frame-secondary {
        background-color: var(--bg-secondary);
        border-color: var(--border-secondary);
    }

    .frame-subtle {
        background-color: var(--bg-surface-hover);
        border-color: var(--border-subtle);
    }

    .transparent {
        background-color: transparent;
    }

    /* effects */

    .effect-default:hover {
        background-color: var(--bg-elevated);
    }

    .effect-secondary:hover {
        background-color: var(--bg-secondary-hover);
    }

    .effect-subtle:hover {
        background-color: var(--bg-app-variant);
    }
</style>
