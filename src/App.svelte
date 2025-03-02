<script lang="ts">
    import ScrollAnchor from './lib/ScrollAnchor.svelte'
    import ScrollContainer from './lib/ScrollContainer.svelte'
    import TestMap from './lib/TestMap.svelte'

    const locations = [
        { lat: 42.345573, lng: -71.098326 },
        { lat: 42.34542, lng: -71.098238 },
        { lat: 42.3455569, lng: -71.0977137 },
    ]
    
    let progress: number = $state(0)

    let location = $derived(locations[Math.ceil(Math.max(1, progress)) - 1])

    $inspect(progress)
</script>

<main>
    <div class="map-container">
        <div class="map-container-inner">
            <TestMap {location} />
        </div>
    </div>

    <div class="container">
        <ScrollContainer bind:progress>
            <ScrollAnchor>
                <div class="header bg">
                    <h1>THE TIME HAS COME</h1>
                </div>
            </ScrollAnchor>
            <div class="header"></div>
            <ScrollAnchor>
                <div class="header bg">
                    <h1>THE TIME HAS COME</h1>
                </div>
            </ScrollAnchor>
            <div class="header"></div>
            <ScrollAnchor>
                <div class="header bg">
                    <h1>THE TIME HAS COME</h1>
                </div>
            </ScrollAnchor>
            <div class="header"></div>
        </ScrollContainer>
        <div class="header">
            <h1>THE TIME HAS COME</h1>
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        height: 100vh;
        grid-template-columns: 1fr 1fr;
    }

    .header {
        height: 50vh;
    }

    .bg {
        background-color: blue;
    }

    .map-container-inner {
        height: 100vh;
        position: sticky;
        top: 0;
        display: grid;
    }
</style>
