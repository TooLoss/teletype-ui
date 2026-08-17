<script lang="ts">
    import '$lib/styles/tokens.css';
    import '$lib/styles/base.css';

    let { children } = $props();
</script>

<div class="page">
    {@render children?.()}
</div>

<style>
    .page {
        max-width: min(800px, 100%);
        margin: 0 auto;
    }
</style>

