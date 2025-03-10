import '@fontsource/poppins/400-italic.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
    target: document.getElementById('app')!,
})

export default app
