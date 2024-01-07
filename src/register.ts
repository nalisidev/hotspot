import { defineCustomElement } from 'vue'
import styles from './style.css?inline'
import Hotspot from './components/hotspot.vue'

// @ts-expect-error vendor
const MyHotspot = defineCustomElement({ ...Hotspot, styles: [styles] })

export function registerWebComponents() {
  if (typeof window === 'undefined')
    return
  customElements.define('hotspot-standard', MyHotspot)
}
