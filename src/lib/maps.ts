import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
    apiKey: import.meta.env.VITE_API_KEY,
    version: 'weekly',
})

export const [{ Map }, { StreetViewPanorama }] = await Promise.all([
    loader.importLibrary('maps'),
    loader.importLibrary('streetView'),
])
export type Map = InstanceType<typeof Map>
export type StreetViewPanorama = InstanceType<typeof StreetViewPanorama>
