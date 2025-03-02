<script lang="ts">
    let hidden = $state(false)
</script>

<div class="container" class:hidden>
    <div class="dialog">
        Please view on a wider screen or rotate your device
        <button aria-label="close" class="close" onclick={() => (hidden = true)}
        ></button>
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

    .close {
        position: absolute;
        right: 0.8em;
        top: 0.8em;
        height: 1em;
        width: 1em;
        cursor: pointer;
    }

    .close::before,
    .close::after {
        position: absolute;
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

    @media screen and (min-width: 720px) {
        .container {
            display: none;
        }
    }
</style>
