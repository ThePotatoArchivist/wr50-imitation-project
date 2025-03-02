<script lang="ts">
    import {
        Map,
        AdvancedMarkerElement,
        type LatLngLiteral,
        type MapOptions,
        Polyline,
        PinElement,
    } from './maps'
    import { onMount } from 'svelte'
    import { lerpCoords } from './util'
    
    function createDot(color?: string, scale: number = 1) {
        const div = document.createElement('div')
        div.className = 'map-marker'
        if (color !== undefined)
            div.style.backgroundColor = color
        if (scale !== 1)
            div.style.scale = scale.toString()
        return div;
    }

    let {
        zoom,
        center,
        locations,
        progress = $bindable(0),
        mapId,
        ...otherOptions
    }: {
        zoom: number,
        center: LatLngLiteral,
        locations: (LatLngLiteral & {title: string})[],
        progress: number,
        mapId: string,
    } & Omit<MapOptions, 'center' | 'zoom' | 'mapId'> = $props()
    
    let currentLocation = $derived(Number.isInteger(progress) ? locations[progress] : lerpCoords(locations[Math.floor(progress)], locations[Math.ceil(progress)], progress % 1))
    
    let mapElement: HTMLElement
    let map: Map
    let markers: AdvancedMarkerElement[]
    let currentMarker: AdvancedMarkerElement
    let line: Polyline

    onMount(() => {
        map = new Map(mapElement, {
            center,
            zoom,
            mapId,
            ...otherOptions
        })

        markers = locations.map((location, index) => {
            const marker = new AdvancedMarkerElement({
                map,
                position: location,
                title: location.title,
                gmpClickable: true,
                content: createDot(),
            })
            marker.addListener('click', () => {
                progress = index
            })
            return marker
        })
        
        currentMarker = new AdvancedMarkerElement({
            map,
            position: currentLocation,
            content: createDot('#00ff00', 2),
        })
        
        line = new Polyline({
            map,
            path: locations,
            geodesic: true,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            strokeOpacity: 0.8,
        })
    })
    
    $effect(() => {
        currentMarker.position = currentLocation
    })
</script>

<div class="map" bind:this={mapElement}></div>

<style>
    :global(.map-marker) {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: white;
        margin-bottom: -50%;
    }
</style>
