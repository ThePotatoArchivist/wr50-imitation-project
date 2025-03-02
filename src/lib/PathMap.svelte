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
    
    let {
        zoom,
        center,
        locations,
        progress = $bindable(0),
        mapId,
        pathColor = '#fff',
        currentLocationColor = '#0f0',
        ...otherOptions
    }: {
        zoom: number,
        center: LatLngLiteral,
        locations: (LatLngLiteral & {title: string})[],
        progress: number,
        mapId: string,
        pathColor?: string,
        currentLocationColor?: string,
    } & Omit<MapOptions, 'center' | 'zoom' | 'mapId'> = $props()
    
    let currentLocation = $derived(Number.isInteger(progress) ? locations[progress] : lerpCoords(locations[Math.floor(progress)], locations[Math.ceil(progress)], progress % 1))
    
    let mapElement: HTMLElement
    let map: Map
    let markers: AdvancedMarkerElement[]
    let currentMarker: AdvancedMarkerElement
    let line: Polyline

    function createDot(isCurrent: boolean = false) {
        const div = document.createElement('div')
        div.classList.add('map-marker')
        if (isCurrent)
            div.classList.add('current')
        div.style.backgroundColor = isCurrent ? currentLocationColor : pathColor
        return div;
    }


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
            content: createDot(true),
        })
        
        line = new Polyline({
            map,
            path: locations,
            geodesic: true,
            strokeColor: pathColor,
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
        margin-bottom: -50%;
    }
    
    :global(.map-marker.current) {
        height: 20px;
        width: 20px;
    }
</style>
