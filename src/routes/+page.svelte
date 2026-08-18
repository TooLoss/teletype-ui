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
        typewriter
    } from "$lib/index.ts";

    import {
        Check
    } from "@lucide/svelte";
</script>

<Header top="s1">
    <Stack>
        <Flex justify="space-between" align="center" style="width: 100%;" gap="s1">
            <Flex direction="column" gap="s4">
                <h1 use:typewriter={{ duration: 400, inViewOptions: { threshold: 0.5 } }}>teletype-ui</h1>
                <p>UI Component Library</p>
            </Flex>
            <span style="height: 100px; width: 100px; background-color: var(--bg-app-variant)">
            </span>
        </Flex>
    </Stack>
</Header>

<Color>
    <Stack>
        <h2  use:typewriter={{ duration: 400, delay: 100, inViewOptions: { threshold: 1 } }}>Why ?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Stack>
</Color>

<Stack>
    <Flex direction="column">
        <TableOfContents depth={2}/>
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
                <Badge>test</Badge>
            {/each}
        </Flex>
    </Stack>

    <Stack>
        <h3>Scroll Layout</h3>
        <Scroll>
            {#each Array(40) as _}
                <Badge>test</Badge>
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
        <Button variant="secondary">
            {#snippet icon()}
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            {/snippet}
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
        <Badge>
            {#snippet icon()}
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            {/snippet}
            GitHub
        </Badge>
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
            <Card
                badges={[
                    { icon: Check, children: 'Top Rated' },
                    { children: 'Sale' }
                ]}
            />
            <Card
                src="https://picsum.photos/200/300"
                title="When data here"
                paragraph="No loading needed."

            />
        </Scroll>
    </Stack>
</Stack>

</article>
