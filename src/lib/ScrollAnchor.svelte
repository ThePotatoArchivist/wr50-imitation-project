<script lang="ts">
    import { getContext, onMount, type Snippet } from 'svelte'
    import { ANCHORS } from './ScrollContainer.svelte'
    import type { Writable } from 'svelte/store'

    let { children }: {
        children: Snippet,
    } = $props()

    let container: HTMLElement

    const parentAnchors = getContext<Writable<HTMLElement[]> | undefined>(ANCHORS)

    onMount(() => {
        if (parentAnchors === undefined) return;
        parentAnchors.update(anchors => [...anchors, container])
        return () => parentAnchors.update(anchors => anchors.filter(e => e != container))
    })
</script>

<div bind:this={container}>
    {@render children()}
</div>
