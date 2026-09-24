<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Component } from 'svelte';
    import type { LucideIcon } from '@lucide/svelte';

    type Props = HTMLAttributes<HTMLDivElement> & {
        icon?: Component | LucideIcon;
        enlargement?: number;
        top?: number;
        left?: number;
    };

    let {
        icon,
        enlargement = 0,
        top = 0,
        left = 0,
        children
    }: Props = $props();

    const iconSize = '1.1em';
</script>

<div class="badge">
    {#if icon}
        {@const Icon = icon}
        <div
            class="icon-container"
            style={`
                --icon-size: ${iconSize};
                --icon-top: ${top}px;
                --icon-left: ${left}px;
                --enlargement: ${enlargement}px;
            `}
        >
            <Icon class="icon" aria-hidden="true" />
        </div>

    {/if}

    {@render children?.()}
</div>

<style>
    .badge {
        display: flex;
        align-items: center;
        gap: var(--size-s4);
        background-color: var(--action-primary-default);
        /* background-color: var(--bg-elevated); */
        border-radius: var(--size-s3);
        color: var(--text-on-accent);
        border: 1px solid var(--color-primary-500);
        padding: var(--size-s5) var(--size-s4);
        -webkit-box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.1); 
        box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.1);
    }

    .icon-container {
        width: calc(var(--icon-size) + var(--enlargement));
        height: var(--icon-size);
    }

    :global(.icon-container > svg) {
        position: relative;
        top: var(--icon-top);
        left: var(--icon-left);
        width: 100%;
        height: 100%;
        color: var(--text-on-accent);
    }
</style>
