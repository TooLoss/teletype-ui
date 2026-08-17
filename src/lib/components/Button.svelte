<script lang="ts">
    import { type LucideIcon } from '@lucide/svelte';
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
        icon?: typeof LucideIcon | Snippet;
        children?: Snippet;
    };

    let {
        variant = 'default',
        type = 'button',
        disabled = false,
        href,
        ref,
        icon,
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

    function isSnippet(val: unknown): val is Snippet {
        return typeof val === 'function' && !val.prototype;
    }
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    type={href ? undefined : type}
    href={href && !disabled ? href : undefined}
    {disabled}
    aria-disabled={disabled}
    tabindex={href && disabled ? -1 : undefined}
    bind:this={ref}
    class={classes}
    {...rest}
>
    {#if icon}
        {#if isSnippet(icon)}
            <div style={`width: ${iconSize}; height: ${iconSize}; display: inherit;`}>
                {@render icon()}
            </div>
        {:else}
            {@const Icon = icon}
            <Icon size={iconSize} aria-hidden="true" />
        {/if}
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
        border-radius: var(--size-s2);
        font-weight: 700;
        font-family: "Space Mono";
        border: 1px solid var(--border-strong);
        box-shadow: 0px 3px 0px 1px var(--border-strong);
        cursor: pointer;
        text-decoration: none;
        transition: 
            transform 0.05s ease, 
            box-shadow 0.05s ease, 
            background-color 0.05s ease, 
            border-color 0.05s ease;
    }

    .btn:active:not(:disabled) {
        transform: translateY(2px);
        box-shadow: 0px 1px 0px 1px var(--border-strong);
    }

    .btn-default {
        background-color: var(--action-primary-default);
        box-shadow: 0px 2px 0px 1px var(--action-primary-active);
    }

    .btn-default:hover:not(:disabled) {
        background-color: var(--action-primary-hover);
        border-color: var(--action-primary-hover);
    }

    .btn-default:active:not(:disabled) {
        background-color: var(--action-primary-active);
        box-shadow: 0px 1px 0px 1px var(--border-subtle);
        border-color: var(--action-primary-active);
    }

    .btn-secondary {
        background-color: var(--bg-white);
        box-shadow: 0px 2px 0px 1px var(--text-muted);
        border-color: var(--text-secondary);
    }

    .btn-secondary:hover:not(:disabled) {
        background-color: var(--text-secondary);
        box-shadow: 0px 2px 0px 1px var(--text-muted);
    }

    .btn-secondary:active:not(:disabled) {
        background-color: var(--text-muted);
        border-color: var(--text-muted);
        box-shadow: 0px 1px 0px 1px var(--border-subtle);
    }

    .btn-variant {
        background-color: var(--action-secondary-default);
        box-shadow: 0px 2px 0px 1px var(--action-secondary-hover);
        border-color: var(--action-secondary-active);
    }

    .btn-variant:hover:not(:disabled) {
        background-color: var(--action-secondary-hover);
        box-shadow: 0px 2px 0px 1px var(--action-secondary-active);
    }

    .btn-variant:active:not(:disabled) {
        background-color: var(--action-secondary-active);
        border-color: var(--action-secondary-active);
        box-shadow: 0px 1px 0px 1px var(--action-secondary-active);
    }

    .btn-icon-only {
        aspect-ratio: 1 / 1;
        height: 100%;
        padding: var(--size-s4)
    }
</style>
