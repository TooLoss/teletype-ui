<script lang="ts">
    import type { BadgeProps } from './Badge.svelte';
    import { Frame, Flex, Badge, Button, Skeleton } from '../index.ts';

    type Props = {
        width?: string;
        aspect?: string;
        src?: string;
        alt?: string;
        badges?: BadgeProps[];
        title?: string;
        paragraph?: string;
        loading?: boolean;
        call?: string;
        href?: string;
    };

    let {
        width = '350px',
        aspect = '2 / 1',
        src,
        alt = "card image",
        badges = [],
        title,
        paragraph,
        loading = false,
        call = 'See More',
        href = '/'
    }: Props = $props();

    function isSnippet(val: unknown): val is Snippet {
        return typeof val === 'function' && !val.prototype;
    }
</script>

<Frame outline={false}>
    <Flex wrap={false} direction="column" style="width: calc(350px - 2*var(--size-s2)); height: 100%;">
        {#if src && !loading}
            <img
                {alt}
                {src}
                style={`
                    background-color: white;
                    width: ${width};
                    aspect-ratio: ${aspect};
                    margin: 0 calc(-1 * var(--size-s2));
                    margin-top: calc(-1 * var(--size-s2));
                    border-radius: var(--size-s3) var(--size-s3) 0 0;
                    object-fit: cover;
                `}
            />
        {:else}
            <Skeleton
                style={`
                    width: ${width};
                    aspect-ratio: ${aspect};
                    margin: 0 calc(-1 * var(--size-s2));
                    margin-top: calc(-1 * var(--size-s2));
                    border-radius: var(--size-s3) var(--size-s3) 0 0;
                `}
            />
        {/if}
        <Flex gap="s4" style="margin: 0 -2px">
            {#if badges.length > 0}
                {#each badges as badge}
                    {#if badge.children}
                        <Badge icon={badge.icon} children={badge.children} />
                    {/if}
                {/each}
            {/if}
        </Flex>
        <Flex direction="column" gap="s3">
            {#if title && !loading}
                <h4>{title}</h4>
            {:else}
                <Skeleton />
            {/if}

            {#if paragraph && !loading}
                <p>{paragraph}</p>
            {:else}
                <Flex direction="column" gap="s4">
                    <Skeleton />
                    <Skeleton />
                </Flex>
            {/if}
        </Flex>
        <Flex style="margin-top: var(--size-s4); height: 100%;">
            <Button style="margin-left: auto; margin-top: auto;" variant="secondary" {href}>{call}</Button>
        </Flex>
    </Flex>
</Frame>
