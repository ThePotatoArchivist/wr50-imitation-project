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
    
    let lastProgress = $state(progress)
    let jumping = $state(false)

    const anchors = writable<HTMLElement[]>([])

    setContext(ANCHORS, anchors)

    function getProgress() {
        const height = getHeight()
        const boxes = $anchors.map(anchor => anchor.getBoundingClientRect())
        const targetIndex = boxes.findIndex(box => box.bottom >= height)
        if (targetIndex === -1) return $anchors.length - 1
        if (targetIndex === 0) return 0
        const targetBox = boxes[targetIndex]
        if (targetBox.top <= height)
            return targetIndex - 1 + (height - targetBox.top) / targetBox.height
        else return targetIndex - 1
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
        if (jumping) return
        progress = getProgress()
        lastProgress = progress
    }
    
    $effect(() => {
        if (progress === lastProgress) return
        $anchors[Math.floor(progress)].scrollIntoView({behavior: 'smooth', block: 'start'})
        jumping = true
        lastProgress = progress
    })
</script>

<svelte:window onscroll={onscrollWindow} onscrollend={() => jumping = false} />

{@render children()}
