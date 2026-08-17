<script lang="ts">
    import '$lib/styles/tokens.css';
    import '$lib/styles/base.css';

    let { children } = $props();
</script>

<div class="container">
    {@render children?.()}
</div>

<style>
    .container {
        max-width: min(1000px, 100%);
        margin: 0 auto;
    }
</style>

