<script lang="ts">
    import { onMount } from 'svelte';

    import {
        Flex,
        Stack,
        Header,
        Color,
        Button,
        Badge,
        Frame,
        Skeleton,
        TableOfContents,
        Scroll,
        Details,
        Social
    } from '$lib/index';

    import {
        typewriter,
        hackreveal
    } from '$lib/index';

    import {
        Check
    } from '@lucide/svelte';

    type SocialItem = {
        name: string;
        url: string;
        icon: string;
    };

    let socials = $state<SocialItem[]>([]);

    import ColorPicker from '$lib/internal/ColorPicker.svelte';
    import Github from '$lib/internal/Github.svelte';

    let color = $state(280);
    let chroma = $state(0.15);

    $effect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--hue-primary', `${color}deg`);
            document.documentElement.style.setProperty('--primary-base-chroma', `${chroma}`);
        }
    });

    onMount(async () => {
        try {
            const response = await fetch('/socials.json');
            socials = await response.json();
        } catch (error) {
            console.error('Failed to load socials:', error);
        }
    });
</script>

<svelte:head>
    <title>teletype-ui</title> 
</svelte:head>

<Header top="s1">
    <Stack>
        <Flex justify="space-between" align="center" style="width: 100%;" gap="s1">
            <Flex direction="column" gap="s4" style="width: auto;" center={false}>
                <h1 use:hackreveal={{ duration: 1500, inViewOptions: { threshold: 0.5 } }}>teletype-ui</h1>
                <span>UI Component Library</span>
            </Flex>
            <ColorPicker bind:color bind:chroma />
        </Flex>
    </Stack>
</Header>

<Color>
    <Stack gap="s2">
        <h2 use:typewriter={{ duration: 400, delay: 100, inViewOptions: { threshold: 1 } }}>Why ?</h2>
        <Stack paddingDirection='none'>
            <p>
                I started building this UI component library to design my future website.
                Thank's to the experience earned at <a href="https://net7.dev"
                target="_blank">net7</a> building websites and services, I
                applied all I learned in this UI component library.
            </p>
            <p>
                The aesthetic is inspired by classic computer science tools,
                using monospace fonts and clean blue accents, making it a great
                fit for a developer portfolio or technical project showcase.
                Custom animations give the components a distinct feel so they
                don't look like generic templates.
            </p>
            <p>
                Building this toolkit now saves me time when setting up future
                projects, including my own portfolio.
            </p>
        </Stack>
    </Stack>
</Color>

<Stack>
    <Flex direction="column">
        <Stack paddingDirection='horizontal' paddingHorizontal='s1'>
            <TableOfContents depth={3}/>
        </Stack>
    </Flex>
</Stack>

<article>

<Stack>
    <h1>Showcase</h1>
    <span>Each and every components and tokens from the UI library.</span>
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
        <Scroll hidebar >
            {#each Array(40) as _}
                <span style="display: block; flex-shrink: 0; width: 30px; height: 30px; background-color: var(--bg-elevated);">
                </span>
            {/each}
        </Scroll>
    </Stack>

    <Stack>
        <h3>Details</h3>
        <Details
            summary="test"
            framed
        >
            A detail component
        </Details>

        <Details
            summary="test"
        >
            Unfolded
        </Details>

        <Details
            summary="test"
            variant="secondary"
        >
            Unfolded
        </Details>
        <Details>
            {#snippet summarySnippet()}
                <Flex align="center" justify="space-between" style="flex-grow: 1">
                    <span>A customed summary</span>
                    <span>99+</span>
                </Flex>
            {/snippet}
            <span>Hello there !</span>
        </Details>
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
    <h2>Social</h2>
    {#each socials as s}
        <Social {...s} />
    {/each}
</Stack>

<Stack>
    <h2>Frames</h2>
    <Flex gap="s4">
        <Frame>
            <Flex direction='column'>
                <h4>This is a Frame</h4>
                <span>It is used to make Cards</span>
            </Flex>
        </Frame>
        <Frame>
            <Flex direction='column'>
                <span><b>This is a Frame</b></span>
                <span>It is used to make Cards</span>
            </Flex>
        </Frame>
    </Flex>
    <Frame outline>
        <Flex direction="column" gap="s3">
            <Flex>
                <Badge>Python</Badge>
            </Flex>
            <span><b>Frame can have outline</b></span>
        </Flex>
    </Frame>
    <Frame outline transparent>
        <span><b>Frame can have outline and be transparent</b></span>
    </Frame>
    <Frame variant="secondary">
        <span><b>Frame can have outline and be transparent</b></span>
    </Frame>
    <Frame variant="secondary" outline>
        <span><b>Frame can have outline and be transparent</b></span>
    </Frame>
    <Frame variant="subtle" padding="small" effect>
        <span><b>Frame can have effects on hover</b></span>
    </Frame>
    <Frame variant="secondary" padding="small" effect>
        <span><b>Frame can have effects on hover</b></span>
    </Frame>
    <Frame padding="small" effect>
        <span><b>Frame can have effects on hover</b></span>
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


<Color style="margin-bottom: 0; margin-top: var(--size-s1)">
    <Stack gap="s4" paddingVertical="zero" style="margin-top: var(--size-s1);">
        <h1>About-me ?</h1>
        <Flex align="center">
            {#each socials as s}
                <Social {...s} />
            {/each}
        </Flex>
    </Stack>

    <Stack gap="zero">
        <h2>Background</h2>
        <Flex align="center" justify="center">
            <Stack style="flex: 1; min-width: 280px;">
                <p>
                I’m a 2nd-year Computer Science student at ENSEEIHT (Toulouse, France)
                in the Digital Sciences program (Applied Mathematics and Computer Science),
                specializing in software engineering. My coursework spans software
                engineering, concurrency, optimization, formal methods, deep learning, and
                compilers, giving me a strong foundation in both theoretical and applied
                CS.
                </p>
                <p>
                Currently Treasurer of the ENSEEIHT computer science club called <a
                href="https://net7.dev" target="_blank">net7</a>, I am not only managing
                the club's financial health but also actively building and maintaining core
                campus infrastructure. From developing Churros (our student booking
                platform) to crafting integration websites, handling DevOps pipelines, and
                managing our internal servers and services.
                </p>
            </Stack>

            <img
                src="https://net7.dev/images/avatars/bilele.webp"
                alt="PP"
                style="width: 250px; max-width: 100%; height: auto; object-fit: cover; flex-shrink: 0; border-radius: 8px;"
            />
        </Flex>
    </Stack>
</Color>

</article>
