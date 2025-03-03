import type { LatLngLiteral } from './maps'

function lerp(a: number, b: number, x: number): number {
    return a + x * (b - a)
}

function lerpCoords(
    a: LatLngLiteral,
    b: LatLngLiteral,
    x: number
): LatLngLiteral {
    return {
        lat: lerp(a.lat, b.lat, x),
        lng: lerp(a.lng, b.lng, x),
    }
}

export { lerp, lerpCoords }
