<script lang="ts">
    import type { MouseEventHandler } from 'svelte/elements'

    let {
        onclick,
        fixed = false,
    }: {
        onclick?: MouseEventHandler<HTMLButtonElement>
        fixed?: boolean
    } = $props()
</script>

<button aria-label="close" class="close" class:fixed {onclick}></button>

<style>
    :root {
        --x-button-size: 1em;
        --x-button-offset: 0.8em;
    }

    .close {
        position: absolute;
        right: var(--x-button-offset);
        top: var(--x-button-offset);
        height: var(--x-button-size);
        width: var(--x-button-size);
        cursor: pointer;
        padding: 0;
        border: none;
        background-color: transparent;
    }

    .fixed {
        position: fixed;
    }

    .close::before,
    .close::after {
        position: absolute;
        display: block;
        width: 100%;
        height: 10%;
        top: 45%;
        content: '';
        background-color: currentColor;
    }

    .close::before {
        rotate: 45deg;
    }

    .close::after {
        rotate: 135deg;
    }
</style>
