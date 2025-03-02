<script lang="ts">
    import { Map, StreetViewPanorama, type LatLngLiteral, type StreetViewPov } from './maps'
    import { onMount } from 'svelte'

    let { position, pov }: { 
        position: LatLngLiteral,
        pov: StreetViewPov,
    } = $props()

    let mapElement: HTMLElement
    let map: Map
    let panorama: StreetViewPanorama

    onMount(() => {
        map = new Map(mapElement, {
            center: position,
            zoom: 14,
        })
        panorama = new StreetViewPanorama(mapElement, {
            position: position,
            pov: {
                heading: 34,
                pitch: 10,
            },
        })

        map.setStreetView(panorama)

        return () => {
            
        }
    })

    $effect(() => {
        panorama.setPosition(position)
    })

    $effect(() => {
        panorama.setPov(pov)
    })
</script>

<div class="map" bind:this={mapElement}></div>
