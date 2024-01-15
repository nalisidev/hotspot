import './style.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { registerWebComponents } from './register'
import { injectHotspotInWindow, parseHotspot } from './window'

registerWebComponents()

const hotspot = parseHotspot()

injectHotspotInWindow(hotspot)

export default hotspot

