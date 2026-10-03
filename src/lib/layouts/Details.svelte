<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { ChevronRight } from '@lucide/svelte';
    import type { Snippet } from 'svelte';
    import Frame from '../components/Frame.svelte';
    import Flex from './Flex.svelte';

    type Props = HTMLAttributes<HTMLElement> & {
        summary?: string;
        summarySnippet?: Snippet;
        framed?: boolean;
        transparent?: boolean;
        outline?: boolean;
    };

    let {
        summary = '',
        summarySnippet,
        framed = false,
        transparent = false,
        outline = false,
        children,
        ...rest
    }: Props = $props();

    const arrowSize = '1.1em';
</script>

<Frame
    padding='zero'
    transparent={framed && transparent}
    outline={framed && outline}
    variant="subtle"
    effect
    {...rest}
>
    <details class="content">
        <summary class="summary-wrapper">
            <Flex gap="s4" align="center" wrap={false}>
                <ChevronRight size={arrowSize} class="arrow" />
                {#if !summarySnippet}
                    <span class="summary-text">{summary}</span>
                {:else}
                    {@render summarySnippet()}
                {/if}
            </Flex>
        </summary>
        <div class="wrapper">
            <hr />
            {@render children?.()}
        </div>
    </details>
</Frame>

<style>
    details.content {
        padding: calc((var(--size-s4) + 1.5*var(--size-s3))/2) var(--size-s2);
    }

    .summary-wrapper {
        cursor: pointer;
        display: block;
        margin: calc(-1 * ((var(--size-s4) + 1.5*var(--size-s3))/2)) calc(-1 * var(--size-s2));
        padding: calc((var(--size-s4) + 1.5*var(--size-s3))/2) var(--size-s2);
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        padding-top: var(--size-s3);
        gap: var(--size-s4);
    }

    :global(details .arrow) {
        transition: transform 0.15s ease;
    }

    :global(details[open] .arrow) {
        transform: rotate(90deg);
    }

    hr {
        margin: 0 var(--size-s5) var(--size-s4) var(--size-s5);
        border-bottom: 0;
    }

    .summary-text {
        font-weight: bold;
    }
</style>
