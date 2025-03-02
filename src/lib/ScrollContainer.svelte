<script lang="ts" module>
    export const ANCHORS = 'anchors'

    type AnchorBehavior = 'top' | 'middle' | 'bottom'
</script>

<script lang="ts">
    import { setContext, type Snippet } from 'svelte'
    import { writable } from 'svelte/store'

    let {
        progress = $bindable(getProgress()),
        children,
        anchor = 'top',
    }: {
        progress?: number
        children: Snippet
        anchor?: AnchorBehavior
    } = $props()

    const anchors = writable<HTMLElement[]>([])

    setContext(ANCHORS, anchors)

    function getProgress() {
        const height = getHeight()
        const boxes = $anchors.map(anchor => anchor.getBoundingClientRect())
        const targetIndex = boxes.findIndex(box => height <= box.bottom)
        if (targetIndex === -1) return $anchors.length
        const targetBox = boxes[targetIndex]
        if (targetBox.top <= height)
            return targetIndex + (height - targetBox.top) / targetBox.height
        else return targetIndex
    }

    function getHeight() {
        switch (anchor) {
            case 'top':
                return 0
            case 'middle':
                return window.innerHeight / 2
            case 'bottom':
                return window.innerHeight
        }
    }

    function onscrollWindow() {
        progress = getProgress()
    }
</script>

<svelte:window onscroll={onscrollWindow} />

{@render children()}
