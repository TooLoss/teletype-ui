<script lang="ts">
    interface Props {
        srcs?: string[];
        height?: string;
    }

    let {
        srcs = [],
        height = '400px'
    }: Props = $props();

    let num: number = $state(0);
</script>

<div class="image-group" style={`height: ${height};`}>
    {#each srcs as src, i}
        <button
            type="button"
            aria-label={`Focus image ${i + 1}`}
            class="image-btn"
            class:active={num === i}
            onclick={() => (num = i)}
        >
            <img 
                alt={`Gallery visual item ${i + 1}`}
                class="image"
                src={src}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
            />
        </button>
    {/each}
</div>

<style>
    .image-group {
        display: flex;
        gap: var(--size-s3, 0.5rem);
        align-items: stretch;
    }

    .image-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        flex: 1;
        transition: flex 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        overflow: hidden;
    }

    .image-btn.active {
        flex: 15;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
</style>
