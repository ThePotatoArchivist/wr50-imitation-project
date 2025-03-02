<script lang="ts">
    import type { Snippet } from 'svelte'

    const {
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
        padding: 2em;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
