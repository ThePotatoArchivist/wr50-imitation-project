<script lang="ts">
    import type { Snippet } from 'svelte'

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<div class="document">
    {@render children()}
</div>

<style>
    .document {
        font-size: 0.9em;
        color: black;
        background-color: white;
        padding: 1.5em;
        font-family: 'Courier New', Courier, monospace;
        text-indent: 2em;
    }
</style>
