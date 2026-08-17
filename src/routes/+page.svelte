<script lang="ts">
    import {
        Flex,
        Stack,
        Header
    } from "$lib/index.ts";
</script>

<Header top="s1">
    <Flex wrap={false} justify="space-between" align="center" style="width: 100%;">
        <Stack>
            <h1>teletype-ui</h1>
            <p>UI Component Library</p>
        </Stack>
        <div style="height: 100px; width: 100px; background-color: var(--bg-surface)">
        </div>
    </Flex>
</Header>

<Flex gap="s2" direction="column">
    <Stack>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
    </Stack>
</Flex>
