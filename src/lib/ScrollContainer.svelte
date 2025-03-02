<script lang="ts" module>
    export const ANCHORS = 'anchors'

    type AnchorBehavior = 'top' | 'middle' | 'bottom'
</script>

<script lang="ts">
    import { setContext, type Snippet } from 'svelte'
    import { writable } from 'svelte/store'

    let { progress = $bindable(0), children, anchor = 'top' }: {
        progress?: number,
        children: Snippet,
        anchor?: AnchorBehavior,
    } = $props()

    const anchors = writable<HTMLElement[]>([])

    setContext(ANCHORS, anchors)

    function updateProgress(height: number) {
        const boxes = $anchors.map(anchor => anchor.getBoundingClientRect())
        const targetIndex = boxes.findIndex(box => height <= box.bottom)
        if (targetIndex === -1) {
            progress = $anchors.length
            return
        }
        const targetBox = boxes[targetIndex]
        if (targetBox.top <= height)
            progress = targetIndex + (height - targetBox.top) / targetBox.height
        else
            progress = targetIndex
    }

    function onscrollWindow() {
        switch (anchor) {
            case 'top': updateProgress(0); break
            case 'middle': updateProgress(window.innerHeight / 2); break
            case 'bottom': updateProgress(window.innerHeight); break
        }
    }
</script>

<svelte:window onscroll={onscrollWindow} />

{@render children()}
