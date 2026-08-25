<script lang="ts">
    import type { Size } from '$lib/types.ts';

    type Props = {
        size?: Size;
    }

    let {
        size = "s3",
        ...rest
    }: Props = $props();
</script>

<span
    class="skeleton"
    style={`height: var(--size-${size});`}
    {...rest}
>
</span>

<style>
    .skeleton {
        flex-grow: 1;
        border-radius: var(--size-s5);
        padding: var(--size-s4) 0;
        display: block;
        background-color: var(--color-primary-gray-1);
        background-image: linear-gradient(
            90deg,
            var(--color-primary-gray-1) 0%,
            var(--color-primary-gray-2) 50%,
            var(--color-primary-gray-1) 100%
        );
        background-size: 200% 100%;
        background-repeat: no-repeat;
        animation: skeleton-pulse 1.8s ease-in-out infinite;
    }
</style>
