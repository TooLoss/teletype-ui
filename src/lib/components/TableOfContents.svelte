<script lang="ts">
    import Flex from '../layouts/Flex.svelte';

    type Props = {
        containerName?: string; 
        depth?: number;
    }

    let {
        containerName = "article",
        depth = 2
    }: Props = $props();

    let headings: Array<{ id: string, text: string, level: number }> = $state([]);

    $effect(() => {
        const container: Element | null = document.querySelector(containerName);
        if (!container) return;

        const depthHeader: string = Array.from({ length: depth }, (_, i) => `h${i + 1}`).join(', ');
        const elements: NodeListOf<HTMLHeadingElement> = container.querySelectorAll(depthHeader);
        const items: HTMLHeadingElement[] = [];

        elements.forEach((el, i) => {
            if (!el.id) {
                el.id = el.textContent
                    ?.toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-') || `heading-${index}`;
            }

            items.push({
                id: el.id,
                text: el.textContent || '',
                level: Number(el.tagName.replace('H', ''))
            });

            headings = items;
        })
    })
</script>

{#if headings.length > 0}
    <nav class="toc" aria-label="Table of contents">
        <Flex direction="column">
            <h3>On this page</h3>
            <ul>
                <Flex direction="column" gap="s5">
                    {#each headings as { id, text, level }}
                        <li class="text-level{level}">
                            <Flex wrap={false} align="center" gap="s4">
                                <span class="separator level{level}"></span>
                                <a class="muted" href="#{id}">{text}</a>
                            </Flex>
                        </li>
                    {/each}
                </Flex>
            </ul>
        </Flex>
    </nav>
{/if}

<style>
    a {
        text-decoration: none;
        color: var(--test-muted);
    }

    a:hover {
        text-decoration: underline;
    }

    li {
        list-style-type:none;
    }

    .muted {
        color: var(--text-muted);
    }

    .separator {
        height: 0;
        width: 0;
        display: none;
        border: none;
        border-top: 2px dotted var(--text-muted);
    }

    .text-level1 {
        font-weight: 700;
    }

    .level2 {
        display: block;
        width: calc(3*var(--size-s4));
    }

    .level3 {
        display: block;
        width: calc(3*var(--size-s3));
    }

    .level4 {
        display: block;
        width: calc(3*var(--size-s2));
    }
</style>
