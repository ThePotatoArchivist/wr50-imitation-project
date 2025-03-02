<script lang="ts">
    import type { LatLngLiteral, StreetViewPov } from './lib/maps'
    import ScrollAnchor from './lib/ScrollAnchor.svelte'
    import ScrollContainer from './lib/ScrollContainer.svelte'
    import StreetviewMap from './lib/StreetviewMap.svelte'

    const locations: {
        pov: StreetViewPov,
        position: LatLngLiteral,
    }[] = [
        {
            pov: { heading: 0, pitch: 0 },
            position: { lat: 42.345573, lng: -71.098326 },
        },
        {
            pov: { heading: 90, pitch: 0 },
            position: { lat: 42.34542, lng: -71.098238 },
        },
        {
            pov: { heading: 180, pitch: 0 },
            position: { lat: 42.3455569, lng: -71.0977137 },
        }
    ]
    
    let progress: number = $state(0)

    let location = $derived(locations[Math.ceil(Math.max(1, progress)) - 1])

</script>

<main>
    <div class="container">
        <ScrollContainer bind:progress anchor="middle">
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

    <div class="map-container">
        <div class="map-container-inner">
            <StreetviewMap {...location} />
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
