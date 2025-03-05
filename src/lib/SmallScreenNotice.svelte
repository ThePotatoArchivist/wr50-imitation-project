<script lang="ts">
    import XButton from './XButton.svelte'

    let hidden = $state(false)
</script>

<div class="container" class:hidden>
    <div class="dialog">
        Please view on a wider screen or rotate your device
        <XButton onclick={() => (hidden = true)} />
    </div>
</div>

<style>
    .container {
        position: fixed;
        inset: 0;
        background-color: #0007;
        display: grid;
        place-items: center;
    }

    .container.hidden {
        display: none;
    }

    .dialog {
        position: relative;
        border-radius: 1em;
        padding: 2em;
        background-color: #222;
        max-width: 60%;
    }

    @media screen and (min-width: 720px) {
        .container {
            display: none;
        }
    }
</style>
