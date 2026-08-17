<script lang="ts">
    import {
        Flex,
        Stack,
        Header,
        Color
    } from "$lib/index.ts";
</script>

<Header top="s1">
    <Flex wrap={false} justify="space-between" align="center" style="width: 100%;">
        <Stack>
            <h1>teletype-ui</h1>
            <p>UI Component Library</p>
        </Stack>
        <span style="height: 100px; width: 100px; background-color: var(--bg-elevated)">
        </span>
    </Flex>
</Header>

<Color>
    <Stack>
        <h2>Why ?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Stack>
</Color>

<Stack>
    <h2>Showcase</h2>
    <p>Each and every components and tokens from the UI library.</p>
</Stack>
