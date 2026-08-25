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
        --light-gray:  oklch(30%  calc(var(--primary-base-chroma)*0.2)  var(--hue-primary));
        --dark-gray:   oklch(25%  calc(var(--primary-base-chroma)*0.23)  var(--hue-primary));

        flex-grow: 1;
        border-radius: var(--size-s5);
        padding: var(--size-s4) 0;
        display: block;
        background-color: var(--light-gray);
        background-image: linear-gradient(
            90deg,
            var(--light-gray) 0%,
            var(--dark-gray) 50%,
            var(--light-gray) 100%
        );
        background-size: 200% 100%;
        background-repeat: no-repeat;
        animation: skeleton-pulse 1.8s ease-in-out infinite;
    }
</style>
