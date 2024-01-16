import type { HotspotProps } from './types'

export function initHotspot(props: HotspotProps & { id?: string }) {
  const hotspotElement = props.id
    ? document.getElementById(props.id)
    : document.querySelector('hotspot-standard')
  if (!hotspotElement)
    throw new Error('<hotspot-standard> element not found.')
  Object.assign(hotspotElement, props)
}

interface Hotspot {
  initHotspot: typeof initHotspot

}

declare const window:
  | {
    Hotspot: Hotspot | undefined
  }
  | undefined

export function parseHotspot() {
  return {
    initHotspot,
  }
}

export function injectHotspotInWindow(hotspot: Hotspot) {
  if (typeof window === 'undefined')
    return
  window.Hotspot = { ...hotspot }
}
