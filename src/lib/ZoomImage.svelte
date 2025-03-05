<script lang="ts">
    import XButton from './XButton.svelte'

    let {
        src,
        alt,
    }: {
        src: string
        alt: string
    } = $props()

    let opened = $state(false)

    function onclickOverlay(event: MouseEvent) {
        if (event.target === event.currentTarget) opened = false
    }
</script>

<button onclick={() => (opened = true)} class="zoom-image">
    <img {src} {alt} />
</button>

{#if opened}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="overlay" onclick={onclickOverlay}>
        <img {src} {alt} />
        <XButton
            onclick={() => (opened = false)}
            --x-button-offset="2em"
            --x-button-size="2em" />
    </div>
{/if}

<svelte:window
    onkeydown={event => {
        if (!opened || event.key !== 'Escape') return
        opened = false
    }} />

<style>
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: zoom-in;
        overflow: hidden;
        line-height: 1;
    }

    button img {
        transition: 0.25s;
        width: 100%;
    }

    button:hover img,
    button:focus img {
        scale: 1.05;
    }

    .overlay {
        background-color: #000c;
        position: fixed;
        inset: 0;
        z-index: 20;
        padding: 4em;
        display: grid;
        place-items: center;
    }

    .overlay img {
        border-radius: 2em;
        max-width: 100%;
        max-height: 100%;
    }
</style>
