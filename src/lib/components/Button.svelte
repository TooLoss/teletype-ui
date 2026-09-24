<script lang="ts">
    import type { LucideIcon } from '@lucide/svelte';
    import type { Component } from 'svelte';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    type AnchorProps = Omit<HTMLAnchorAttributes, 'href' | 'type'> & {
        href: HTMLAnchorAttributes['href'];
        type?: never;
        disabled?: HTMLButtonAttributes['disabled'];
    };

    type ButtonProps = Omit<HTMLButtonAttributes, 'type' | 'href'> & {
        type?: HTMLButtonAttributes['type'];
        href?: never;
        disabled?: HTMLButtonAttributes['disabled'];
    };

    type Props = (AnchorProps | ButtonProps) & {
        variant: 'default' | 'variant' | 'secondary';
        icon?: LucideIcon | Component;
        enlargement?: number;
        top?: number;
        left?: number;
    };

    let {
        variant = 'default',
        type = 'button',
        disabled = false,
        href,
        icon,
        enlargement = 0,
        top = 0,
        left = 0,
        children,
        ...rest
    }: Props = $props();

    const iconSize = $derived(children ? '1.25em' : '1.5em');

    const classes = $derived(
        [
            'btn',
            `btn-${variant}`,
            icon && 'btn-has-icon',
            !children && 'btn-icon-only',
        ]
        .filter(Boolean)
        .join(' ')
    );
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    type={href ? undefined : type}
    href={href && !disabled ? href : undefined}
    {disabled}
    aria-disabled={disabled}
    tabindex={href && disabled ? -1 : undefined}
    class={classes}
    {...rest}
>
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
            <Icon size={iconSize} aria-hidden="true" />
        </div>
    {/if}

    {#if children}
        {@render children()}
    {/if}
</svelte:element>

<style>
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--size-s3);
        color: var(--bg-app);
        padding: var(--size-s4) var(--size-s3);
        border-radius: var(--size-s3);
        font-weight: 700;
        font-family: "Space Mono";
        cursor: pointer;
        text-decoration: none;
        transition: 
            transform 0.05s ease, 
            box-shadow 0.05s ease, 
            background-color 0.05s ease, 
            border-color 0.05s ease;
    }

    .btn:active:not(:disabled) {
        transform: translateY(3px);
        box-shadow: 0px 1px 0px 1px var(--border-strong);
    }

    .btn-default {
        background-color: var(--action-primary-default);
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, var(--action-primary-default) var(--shadow-power), black);
    }

    .btn-default:hover:not(:disabled) {
        background-color: var(--action-primary-hover);
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, var(--action-primary-hover) var(--shadow-power), black);
    }

    .btn-default:active:not(:disabled) {
        background-color: var(--action-primary-active);
        box-shadow: 0px 0px 0px 0px;
        border-color: var(--action-primary-active);
    }

    .btn-secondary {
        background-color: #fafafa;
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, #fafafa var(--shadow-power), black);
    }

    .btn-secondary:hover:not(:disabled) {
        background-color: #e0e0e0;
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, #e0e0e0 var(--shadow-power), black);
    }

    .btn-secondary:active:not(:disabled) {
        background-color: #bfbfbf;
        box-shadow: 0px 0px 0px 0px;
    }

    .btn-variant {
        background-color: var(--action-secondary-default);
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, var(--action-secondary-default) var(--shadow-power), black);
        border-color: var(--action-secondary-active);
    }

    .btn-variant:hover:not(:disabled) {
        background-color: var(--action-secondary-hover);
        box-shadow: 0px 2px 0px 1px color-mix(in srgb, var(--action-secondary-hover) var(--shadow-power), black);
        box-shadow: 0px 2px 0px 1px var(--action-secondary-active);
    }

    .btn-variant:active:not(:disabled) {
        background-color: var(--action-secondary-active);
        box-shadow: 0px 0px 0px 0px;
    }

    .btn-icon-only {
        aspect-ratio: 1 / 1;
        height: 100%;
        padding: var(--size-s4)
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
