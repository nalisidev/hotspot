import { defineCustomElement } from 'vue'
import { Hotspot } from './components'
import { defaultHotspotProps } from './constants'
import type { Package } from './types'

export const packages: Package[] = []

const MyHotspot = defineCustomElement(Hotspot)

export function registerWebComponents() {
  if (typeof window === 'undefined')
    return
  // @ts-expect-error element incorect type
  customElements.define('hotspot-standard', MyHotspot, defaultHotspotProps)
}
