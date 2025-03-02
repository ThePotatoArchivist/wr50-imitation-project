<script lang="ts">
    import {
        Map,
        StreetViewPanorama,
        type LatLngLiteral,
        type StreetViewPanoramaOptions,
        type StreetViewPov,
    } from './maps'
    import { onMount } from 'svelte'

    let {
        position,
        pov,
        center = position,
        ...otherOptions
    }: {
        position: LatLngLiteral
        pov: StreetViewPov
        center?: LatLngLiteral
    } & Omit<StreetViewPanoramaOptions, 'position' | 'pov' | 'zoom'> = $props()

    let mapElement: HTMLElement
    let map: Map
    let panorama: StreetViewPanorama

    onMount(() => {
        map = new Map(mapElement, {
            center,
            zoom: 14,
        })
        panorama = new StreetViewPanorama(mapElement, {
            position,
            pov,
            ...otherOptions,
        })

        map.setStreetView(panorama)

        return () => {}
    })

    $effect(() => {
        panorama.setPosition(position)
    })

    $effect(() => {
        panorama.setPov(pov)
    })
</script>

<div class="map" bind:this={mapElement}></div>
