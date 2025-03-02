import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
    apiKey: import.meta.env.VITE_API_KEY,
    version: 'weekly',
})

export const [{ Map, Polyline, MapTypeId }, { StreetViewPanorama }, { AdvancedMarkerElement, PinElement }] = await Promise.all([
    loader.importLibrary('maps'),
    loader.importLibrary('streetView'),
    loader.importLibrary('marker'),
])

export type Map = InstanceType<typeof Map>
export type Polyline = InstanceType<typeof Polyline>
export type StreetViewPanorama = InstanceType<typeof StreetViewPanorama>
export type AdvancedMarkerElement = InstanceType<typeof AdvancedMarkerElement>
export type PinElement = InstanceType<typeof PinElement>

export type LatLngLiteral = google.maps.LatLngLiteral
export type StreetViewPov = google.maps.StreetViewPov
export type StreetViewPanoramaOptions = google.maps.StreetViewPanoramaOptions
export type MapOptions = google.maps.MapOptions
