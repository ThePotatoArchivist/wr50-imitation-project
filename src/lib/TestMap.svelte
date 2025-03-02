<script lang="ts">
    import { Map, StreetViewPanorama, type LatLngLiteral } from './maps'
    import { onMount } from 'svelte'

    let { location }: { 
        location: LatLngLiteral 
    } = $props()

    let mapElement: HTMLElement
    let map: Map
    let panorama: StreetViewPanorama

    onMount(() => {
        map = new Map(mapElement, {
            center: location,
            zoom: 14,
        })
        panorama = new StreetViewPanorama(mapElement, {
            position: location,
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
        panorama.setPosition(location)
    })
</script>

<div class="map" bind:this={mapElement}></div>
