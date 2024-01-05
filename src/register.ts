import styles from './style.css?inline'
import { defineCustomElement } from 'vue'
import Hotspot from './components/hotspot.vue'

//@ts-ignore vendor 
const MyHotspot =  defineCustomElement({...Hotspot, styles: [styles]})

export function registerWebComponents() {
  if (typeof window === 'undefined')
    return
  customElements.define('hotspot-standard', MyHotspot)
}
