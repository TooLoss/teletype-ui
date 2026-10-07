<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        name?: string;
        date?: string;
        description?: string;
        children?: Snippet;
        noline?: boolean;
        end?: boolean;
    }

    let {
        name = '',
        date = '',
        description = '',
        noline = false,
        end = false,
        children
    }: Props = $props();

    import {
        Flex,
        Stack
    } from 'teletype-ui';

    const circleSize = "1.8rem";
    const thickness = "0.25rem";
</script>

<Stack paddingHorizontal="zero" paddingVertical="zero">
    <Flex justify="center" wrap={false} gap="s2" style={`--circle-size: ${circleSize}; --thickness: ${thickness}`}>
        <!-- partie icone -->
        {#if !noline}
            <Flex
                align="center"
                justify="center"
                direction="column" 
                gap="zero"
                wrap={false}
                style="flex-grow: 0; width: fit-content; height: auto;"
            >
                <div class="circle-inner"></div>
                <div 
                    class="stick"
                    style={`
                        ${end ? 'background: linear-gradient(var(--text-primary), var(--bg-app));' : ''}
                    `}
                ></div>
            </Flex>
        {/if}
        <!-- partie text -->
        <Flex direction="column" wrap={false} style="flex-grow: 1; padding-top: 0.1rem;">
            <Flex justify="space-between" align="center">
                <span class="title"><b>{name}</b></span>
                <hr noshade style="flex-grow: 1;" />
                <span><i>{date}</i></span>
            </Flex>
            <p>{description}</p>

            {#if children}
                {@render children()}
            {/if}
        </Flex>
    </Flex>
</Stack>

<style>
    .title {
        text-transform: capitalize;
        font-variant-caps: small-caps;
        font-size: var(--size-s3);
    }

    .circle-inner {
        height: calc(var(--circle-size));
        width: calc(var(--circle-size));
        flex-shrink: 0;
        border-radius: 100%;
        background-color: var(--bg-app);
        outline: var(--thickness) solid var(--text-primary);
        margin: auto;
    }

    .stick {
        overflow: hidden;
        width: 100%;
        min-height: 5rem;
        height: 100%;
        background-color: var(--text-primary);
        flex-shrink: 1;
        
        /* made with https://css-generators.com/wavy-shapes/ */
        mask: 
            radial-gradient(calc(11.41px + 0.125rem) at calc(100% + 5.5px) 50%,#0000 calc(99% - 0.25rem),#000 calc(101% - 0.25rem) 99%,#0000 101%) calc(50% - 5px - 0.125rem + .5px) calc(50% - 20px)/calc(10px + 0.25rem) 40px  repeat-y,
            radial-gradient(calc(11.41px + 0.125rem) at -5.5px 50%,#0000 calc(99% - 0.25rem),#000 calc(101% - 0.25rem) 99%,#0000 101%) calc(50% + 5px + 0.125rem) 50%/calc(10px + 0.25rem) 40px  repeat-y;
    }

    p {
        color: var(--text-muted);
    }
</style>
