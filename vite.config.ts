import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build: {
        target: 'esnext',
    },
    base: '/wr50-imitation-project',
})
