<script lang="ts">
    import type { Snippet } from 'svelte'
    import XButton from './XButton.svelte'

    let {
        button,
        children,
    }: {
        button: Snippet<[() => void]>,
        children: Snippet,
    } = $props()
    
    let opened = $state(false)
    
    function onclickOverlay(event: MouseEvent) {
        if (event.target === event.currentTarget)
            opened = false
    }
</script>

{@render button(() => opened = true)}

{#if opened}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="overlay" onclick={onclickOverlay}>
        <div class="popup">
            {@render children()}
        </div>
        <XButton onclick={() => opened = false} --x-button-offset=2em --x-button-size=2em fixed />
    </div>
{/if}

<svelte:window onkeydown={event => {
    if (!opened || event.key !== 'Escape') return
    opened = false
}} />

<style>
    .overlay {
        background-color: #000c;
        position: fixed;
        inset: 0;
        z-index: 20;
        overflow-y: auto;
        padding: 4em;
    }
    
    .popup {
        position: relative;
        border-radius: 2em;
        padding: 2em;
        width: 64em;
        max-width: calc(100% - 8em);
        margin: auto;
        background-color: #24242e;
    }
</style>
