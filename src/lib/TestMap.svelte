<script lang="ts" module>
    declare global {
        interface Window {
            initialize: () => void
        }
    }
</script>

<script lang="ts">
    import { Map, StreetViewPanorama } from './maps'
    import { onMount } from 'svelte'

    let mapElement: HTMLElement
    let map: Map
    let panorama: StreetViewPanorama

    const locations = [
        { lat: 42.345573, lng: -71.098326 },
        { lat: 42.34542, lng: -71.098238 },
        { lat: 42.3455569, lng: -71.0977137 },
    ]

    const defaultLocation = locations[0]
    let location = $state(defaultLocation)

    onMount(() => {
        map = new Map(mapElement, {
            center: defaultLocation,
            zoom: 14,
        })
        panorama = new StreetViewPanorama(mapElement, {
            position: defaultLocation,
            pov: {
                heading: 34,
                pitch: 10,
            },
        })

        map.setStreetView(panorama)
    })

    $effect(() => {
        panorama.setPosition(location)
    })
</script>

<div bind:this={mapElement}></div>

<div class="options">
    {#each locations as loc}
        <label>
            <input type="radio" bind:group={location} value={loc} />
            {JSON.stringify(loc)}
        </label>
    {/each}
</div>

<style>
    .options {
        display: flex;
        flex-direction: column;
    }
</style>
