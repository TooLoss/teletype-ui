<script lang="ts">
    import {
        Flex,
        Stack,
        Header,
        Color,
        Button,
        Badge,
        Frame,
        Skeleton,
        Separator,
        TableOfContents,
        Scroll,
        Card
    } from "$lib/index.ts";

    import {
        typewriter,
        hackreveal
    } from "$lib/index.ts";

    import {
        Check
    } from "@lucide/svelte";

    import Github from '$lib/internal/Github.svelte';
</script>

<Header top="s1">
    <Stack>
        <Flex justify="space-between" align="center" style="width: 100%;" gap="s1">
            <Flex direction="column" gap="s4" style="width: auto;" center={false}>
                <h1 use:hackreveal={{ duration: 1500, inViewOptions: { threshold: 0.5 } }}>teletype-ui</h1>
                <p>UI Component Library</p>
            </Flex>
            <span style="height: 100px; width: 100px; background-color: var(--bg-app-variant)">

            </span>
        </Flex>
    </Stack>
</Header>

<Color>
    <Stack gap="s2">
        <h2  use:typewriter={{ duration: 400, delay: 100, inViewOptions: { threshold: 1 } }}>Why ?</h2>
        <Stack paddingDirection='none'>
            <p style="text-indent:10px;">
                I built this UI library to push Svelte to its limits while learning what it really takes to design a solid interface.
            </p>
            <p style="text-indent:10px;">
                The aesthetic is inspired by classic computer science tools, using monospace fonts and clean blue accents, making it a great fit for a developer portfolio or technical project showcase. Custom animations give the components a distinct feel so they don't look like generic templates.
            </p>
            <p style="text-indent:10px;">
                Building this toolkit now saves me time when setting up future projects, including my own portfolio.
            </p>
        </Stack>
    </Stack>
</Color>

<Stack>
    <Flex direction="column">
        <Separator />
        <Stack paddingDirection='horizontal' paddingHorizontal='s1'>
            <TableOfContents depth={3}/>
        </Stack>
        <Separator />
    </Flex>
</Stack>

<article>

<Stack>
    <h1>Showcase</h1>
    <p>Each and every components and tokens from the UI library.</p>
</Stack>

<Stack>
    <h2>Layouts</h2>

    <Stack>
        <h3>Flex Layout</h3>
        <Flex>
            {#each Array(40) as _}
                <span style="width: 10px; height: 10px; background-color: var(--bg-elevated);">
                </span>
            {/each}
        </Flex>
    </Stack>

    <Stack>
        <h3>Scroll Layout</h3>
        <Scroll>
            {#each Array(40) as _}
                <span style="display: block; flex-shrink: 0; width: 30px; height: 30px; background-color: var(--bg-elevated);">
                </span>
            {/each}
        </Scroll>
    </Stack>
</Stack>

<Stack>
    <h2>Buttons</h2>
    <Flex>
        <Button>
            Back
        </Button>
        <Button variant="secondary">
            Back
        </Button>
        <Button variant="variant">
            Back
        </Button>
    </Flex>
    <Flex>
        <Button icon={Check}>Back</Button>
        <Button icon={Check} />
        <Button icon={Github} variant="secondary">
            See on Github
        </Button>
    </Flex>
    <Flex>
        <Button href="/" variant="secondary" icon={Check}>Back</Button>
        <Button href="/" variant="variant" icon={Check} />
    </Flex>
</Stack>

<Stack>
    <h2>Badges</h2>
    <Flex gap="s4">
        <Badge>badge</Badge>
        <Badge>badge</Badge>
        <Badge>badge</Badge>
        <Badge icon={Check}>badge</Badge>
        <Badge icon={Github}>github</Badge>
    </Flex>
</Stack>

<Stack>
    <h2>Frames</h2>
    <Flex gap="s4">
        <Frame>
            <Flex direction='column'>
                <h4>This is a Frame</h4>
                <p>It is used to make Cards</p>
            </Flex>
        </Frame>
        <Frame>
            <Flex direction='column'>
                <p><b>This is a Frame</b></p>
                <p>It is used to make Cards</p>
            </Flex>
        </Frame>
    </Flex>
    <Frame outline={true}>
        <Flex direction="column" gap="s3">
            <Flex>
                <Badge>Python</Badge>
            </Flex>
            <p><b>Frame can have outline</b></p>
        </Flex>
    </Frame>
    <Frame outline={true} transparent={true}>
        <p><b>Frame can have outline and be transparent</b></p>
    </Frame>
    <Frame variant="secondary">
        <p><b>Frame can have outline and be transparent</b></p>
    </Frame>
    <Frame variant="secondary" outline={true}>
        <p><b>Frame can have outline and be transparent</b></p>
    </Frame>
</Stack>

<Stack>
    <h2>Skeletons</h2>
    <Flex direction="column" style="width: 50%;" center={false}>
        <Skeleton style="height: 200px" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </Flex>
</Stack>

<Stack>
    <h2>Separators</h2>
    <Separator />
</Stack>

<Stack>
    <h2>Advanced Components</h2>
    
    <Stack>
        <h3>Cards</h3>
        <Scroll>
            <!-- <Card -->
            <!--     badges={[ -->
            <!--         { icon: Check, children: 'Top Rated' }, -->
            <!--         { children: 'Sale' } -->
            <!--     ]} -->
            <!-- /> -->
            <!-- <Card -->
            <!--     src="https://picsum.photos/2000/1000" -->
            <!--     title="When data here" -->
            <!--     paragraph="No loading needed." -->
            <!---->
            <!-- /> -->
        </Scroll>
    </Stack>
</Stack>

</article>
