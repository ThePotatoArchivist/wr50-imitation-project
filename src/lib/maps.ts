import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
    apiKey: import.meta.env.API_KEY,
    version: 'weekly',
})

export const { Map } = await loader.importLibrary('maps')
