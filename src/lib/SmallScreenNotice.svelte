<div class="container">
    <div class="dialog">
        Please view on a wider screen or rotate your device
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
    
    .dialog {
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
