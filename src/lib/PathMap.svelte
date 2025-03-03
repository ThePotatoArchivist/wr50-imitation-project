<script lang="ts">
    import {
        Map,
        AdvancedMarkerElement,
        type LatLngLiteral,
        type MapOptions,
        Polyline,
        PinElement,
        StyledMapType,
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
        zoom: number
        center: LatLngLiteral
        locations: (LatLngLiteral & { title: string })[]
        progress: number
        mapId: string
        pathColor?: string
        currentLocationColor?: string
    } & Omit<MapOptions, 'center' | 'zoom' | 'mapId'> = $props()

    let currentLocation = $derived(
        Number.isInteger(progress)
            ? locations[progress]
            : lerpCoords(
                  locations[Math.floor(progress)],
                  locations[Math.ceil(progress)],
                  progress % 1
              )
    )

    let mapElement: HTMLElement
    let map: Map
    let markers: AdvancedMarkerElement[]
    let currentMarker: AdvancedMarkerElement
    let line: Polyline

    function createDot(title: string | undefined, isCurrent: boolean = false) {
        const dot = document.createElement('div')
        dot.classList.add('map-marker')
        if (isCurrent) dot.classList.add('current')
        dot.style.backgroundColor = isCurrent ? currentLocationColor : pathColor
        if (title !== undefined) {
            const titleDiv = document.createElement('div')
            titleDiv.classList.add('marker-title')
            titleDiv.style.color = pathColor
            titleDiv.appendChild(document.createTextNode(title))
            dot.appendChild(titleDiv)
        }
        return dot
    }

    onMount(() => {
        map = new Map(mapElement, {
            center,
            zoom,
            mapId,
            ...otherOptions,
        })

        map.mapTypes.set(
            'minimal',
            new StyledMapType(
                [
                    {
                        elementType: 'labels',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'administrative',
                        elementType: 'geometry',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.land_parcel',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.neighborhood',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'poi',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.icon',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'labels',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road.local',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'transit',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                ],
                { name: 'Minimal' }
            )
        )
        map.setMapTypeId('minimal')

        markers = locations.map((location, index) => {
            const marker = new AdvancedMarkerElement({
                map,
                position: location,
                title: location.title,
                gmpClickable: true,
                content: createDot(location.title),
            })
            marker.addListener('gmp-click', () => {
                progress = index
            })
            return marker
        })

        currentMarker = new AdvancedMarkerElement({
            map,
            position: currentLocation,
            content: createDot(undefined, true),
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

    :global(.marker-title) {
        display: none;
        position: absolute;
        bottom: 150%;
        left: 50%;
        width: max-content;
        translate: -50% 0;
        font-size: 1.5em;
    }

    :global(.map-marker:hover .marker-title) {
        display: block;
    }
</style>
