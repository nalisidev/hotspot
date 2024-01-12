import './style.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { registerWebComponents } from './register'
import { injectHotspotInWindow, parseHotspot } from './window'
// import { Hotspot } from './components'
// import { createApp } from 'vue'
// import { defaultHotspotProps } from './constants'

registerWebComponents()

const hotspot = parseHotspot()

injectHotspotInWindow(hotspot)

export default hotspot

//@ts-ignore
// createApp(Hotspot, defaultHotspotProps).mount('#app')
