<script lang="ts">
    import type { Size } from '$lib/types.ts';
    import Flex from '../layouts/Flex.svelte';

    type Props = {
        name?: string;
        icon?: string;
        url?: string;
        size?: Size;
    }

    let {
        name = '',
        icon = '',
        url = '',
        size = '1.5rem',
    }: Props = $props();
</script>

<abbr title={name}>
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        style={`width: ${size}; height: ${size}; -webkit-mask-image: url(${icon}); mask-image: url(${icon});`}
        aria-label={name}
    >
    </a>
</abbr>

<style>
    .link {
        background-color: white;
        transition: background-color 0.15s ease, transform 0.15s ease;
        display: inline-flex;
        flex-shrink: 0;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    }

    .link:hover {
        background-color: var(--action-primary-hover);
    }
</style>
