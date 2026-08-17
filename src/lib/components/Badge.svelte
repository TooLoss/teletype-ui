<script lang="ts">
    import type { Snippet } from 'svelte';
    import { type LucideIcon } from '@lucide/svelte';

    type Props = {
        icon?: typeof LucideIcon | Snippet;
        children?: Snippet;
    };

    let {
        icon,
        children
    }: Props = $props();

    function isSnippet(val: unknown): val is Snippet {
        return typeof val === 'function' && !val.prototype;
    }
</script>

<div class="badge">
    {#if icon}
        {#if isSnippet(icon)}
            <div class="icon">
                {@render icon()}
            </div>
        {:else}
            {@const Icon = icon}
            <Icon size={12} />
        {/if}
    {/if}

    {@render children?.()}
</div>

<style>
    .badge {
        display: flex;
        align-items: center;
        gap: var(--size-s4);
        background-color: var(--action-primary-default);
        border-radius: var(--size-s3);
        color: var(--bg-app);
        border: 1px solid var(--color-primary-500);
        padding: var(--size-s5) var(--size-s4);
    }

    .icon {
        display: inherit;
        width: 12px;
        height: 12px;
        align-items: center;
    }
</style>
