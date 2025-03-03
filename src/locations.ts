import type { LatLngLiteral, StreetViewPov } from './lib/maps'

const STREET_VIEW_LOCATIONS: {
    position: LatLngLiteral
    pov: StreetViewPov
}[] = [
    {
        // Angels Flight
        position: { lat: 34.0511031, lng: -118.249919 },
        pov: { heading: 48.61, pitch: 4.02 },
    },
    {
        // Walt Disney Concert Hall
        position: { lat: 34.05564381902516, lng: -118.24903963257336 },
        pov: { heading: 252.51, pitch: 14.374 },
    },
    {
        // Gloria Molina Park
        // @34.0567083,-118.2473204,3a,75y,127.48h,75.33t
        position: { lat: 34.0567083, lng: -118.2473204 },
        pov: { heading: 127.48, pitch: -14.67 },
    },
    {
        // Caltrans
        position: { lat: 34.0522954, lng: -118.2434409 },
        pov: { heading: 179.12, pitch: 19.6 },
    },
    {
        // Bradbury
        // @34.0506715,-118.2476327,3a,90y,219.8h,97.79t
        position: { lat: 34.0506715, lng: -118.2476327 },
        pov: { heading: 219.8, pitch: 7.79 },
    },
    {
        // Grand Central Market
        position: { lat: 34.0510505, lng: -118.2496353 },
        pov: { heading: 89.33, pitch: 1.95 },
    },
    {
        // The Last BOokstore
        // @34.0475974,-118.2500109,3a,75y,51.71h,102.33t
        position: { lat: 34.0475974, lng: -118.2500109 },
        pov: { heading: 51.7, pitch: 12.33 },
    },
]

const MAP_LOCATIONS: ({
    title: string
} & LatLngLiteral)[] = [
    {
        // 34.05188821540468, -118.2505472486012
        title: 'Angels Flight Railway',
        lat: 34.0518882,
        lng: -118.2505472,
    },
    {
        // 34.05571054164019, -118.2499461767449
        title: 'Disney Concert Hall',
        lat: 34.0557105,
        lng: -118.2499462,
    },
    {
        // 34.05658151600942, -118.24672724996705
        title: 'Gloria Molina Park',
        lat: 34.0565815,
        lng: -118.2467272,
    },
    {
        // 34.05128323545229, -118.24318724210585
        title: 'Caltrans District 7 Headquarters',
        lat: 34.0512832,
        lng: -118.2431872,
    },
    {
        // 34.05103471205276, -118.24777926559135
        title: 'Bradbury Building',
        lat: 34.0510347,
        lng: -118.2477793,
    },
    {
        // 34.0513192446412, -118.24915253444394
        title: 'Grand Central Market',
        lat: 34.0513192,
        lng: -118.2491525,
    },
    {
        // 34.04806583860772, -118.24996812591691
        title: 'The Last Bookstore',
        lat: 34.0480658,
        lng: -118.2499681,
    },
]

const MAP_CENTER = {
    lat: 34.0525236,
    lng: -118.2463628,
} satisfies LatLngLiteral

export { MAP_CENTER, MAP_LOCATIONS, STREET_VIEW_LOCATIONS }
