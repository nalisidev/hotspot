import { h } from '@unocss/preset-mini/utils'
import type { Preset } from 'unocss'
import type { PresetMiniOptions, Theme } from 'unocss/preset-mini'

export interface PresetShadcnOptions extends PresetMiniOptions {}

function handleMatchNumber(v: string, defaultVal = '0') {
  return h.bracket.cssvar.global.auto.fraction.number(v || defaultVal)?.replace('%', '')
}
const handleMatchRem = (v: string, defaultVal = 'full') => h.bracket.cssvar.global.auto.fraction.rem(v || defaultVal)

export function presetShadcn(_options: PresetShadcnOptions = {}): Preset<Theme> {
  return {
    name: 'unocss-preset-shadcn',
    preflights: [
      {
        getCSS: () => `
          @keyframes shadcn-down { from{ height: 0 } to { height: var(--radix-accordion-content-height)} }
          @keyframes shadcn-up { from{ height: var(--radix-accordion-content-height)} to { height: 0 } }
          @keyframes shadcn-enter { from{ opacity: var(--un-enter-opacity, 1); transform: translate3d(var(--un-enter-translate-x, 0), var(--un-enter-translate-y, 0), 0) scale3d(var(--un-enter-scale, 1), var(--un-enter-scale, 1), var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0)) } }
          @keyframes shadcn-exit { to{ opacity: var(--un-exit-opacity, 1); transform: translate3d(var(--un-exit-translate-x, 0), var(--un-exit-translate-y, 0), 0) scale3d(var(--un-exit-scale, 1), var(--un-exit-scale, 1), var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0)) } }

          html {
            color-scheme: light;
          }
          
          html.dark {
            color-scheme: dark;
          }
        
          .theme-blue {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
          
            --primary: 221.2 83.2% 53.3%;
            --primary-foreground: 210 40% 98%;
          
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;
          
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
          
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
          
            --border:214.3 31.8% 91.4%;
            --input:214.3 31.8% 91.4%;
            --ring:221.2 83.2% 53.3%;
            --radius: 0.5rem;
          }
           
          .theme-blue.dark {
            --background:222.2 84% 4.9%;
            --foreground:210 40% 98%;

            --card:222.2 84% 4.9%;
            --card-foreground:210 40% 98%;
          
            --popover:222.2 84% 4.9%;
            --popover-foreground:210 40% 98%;
          
            --primary:217.2 91.2% 59.8%;
            --primary-foreground:222.2 47.4% 11.2%;
          
            --secondary:217.2 32.6% 17.5%;
            --secondary-foreground:210 40% 98%;
          
            --muted:217.2 32.6% 17.5%;
            --muted-foreground:215 20.2% 65.1%;
          
            --accent:217.2 32.6% 17.5%;
            --accent-foreground:210 40% 98%;
          
            --destructive:0 62.8% 30.6%;
            --destructive-foreground:210 40% 98%;
          
            --border:217.2 32.6% 17.5%;
            --input:217.2 32.6% 17.5%;
            --ring:224.3 76.3% 48%;
          }

          .theme-zinc {
            --background: 0 0% 100%;
            --foreground: 240 10% 3.9%;
          
            --muted: 240 4.8% 95.9%;
            --muted-foreground: 240 3.8% 46.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 240 10% 3.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 240 10% 3.9%;
          
            --border: 240 5.9% 90%;
            --input: 240 5.9% 90%;
          
            --primary: 240 5.9% 10%;
            --primary-foreground: 0 0% 98%;
          
            --secondary: 240 4.8% 95.9%;
            --secondary-foreground: 240 5.9% 10%;
          
            --accent: 240 4.8% 95.9%;
            --accent-foreground: 240 5.9% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 240 5.9% 10%;
          
            --radius: 0.5rem;
          }
          
          .theme-zinc.dark {
            --background: 240 10% 3.9%;
            --foreground: 0 0% 98%;
          
            --muted: 240 3.7% 15.9%;
            --muted-foreground: 240 5% 64.9%;
          
            --popover: 240 10% 3.9%;
            --popover-foreground: 0 0% 98%;
          
            --card: 240 10% 3.9%;
            --card-foreground: 0 0% 98%;
          
            --border: 240 3.7% 15.9%;
            --input: 240 3.7% 15.9%;
          
            --primary: 0 0% 98%;
            --primary-foreground: 240 5.9% 10%;
          
            --secondary: 240 3.7% 15.9%;
            --secondary-foreground: 0 0% 98%;
          
            --accent: 240 3.7% 15.9%;
            --accent-foreground: 0 0% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 240 4.9% 83.9%;
          }
          
          .theme-slate {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
          
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
          
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
          
            --primary: 222.2 47.4% 11.2%;
            --primary-foreground: 210 40% 98%;
          
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;
          
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
          
            --ring: 222.2 84% 4.9%;
          
            --radius: 0.5rem;
          }
          
          .theme-slate.dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
          
            --muted: 217.2 32.6% 17.5%;
            --muted-foreground: 215 20.2% 65.1%;
          
            --popover: 222.2 84% 4.9%;
            --popover-foreground: 210 40% 98%;
          
            --card: 222.2 84% 4.9%;
            --card-foreground: 210 40% 98%;
          
            --border: 217.2 32.6% 17.5%;
            --input: 217.2 32.6% 17.5%;
          
            --primary: 210 40% 98%;
            --primary-foreground: 222.2 47.4% 11.2%;
          
            --secondary: 217.2 32.6% 17.5%;
            --secondary-foreground: 210 40% 98%;
          
            --accent: 217.2 32.6% 17.5%;
            --accent-foreground: 210 40% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 40% 98%;
          
            --ring: 212.7 26.8% 83.9;
          }
          
          .theme-stone {
            --background: 0 0% 100%;
            --foreground: 20 14.3% 4.1%;
          
            --muted: 60 4.8% 95.9%;
            --muted-foreground: 25 5.3% 44.7%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 20 14.3% 4.1%;
          
            --card: 0 0% 100%;
            --card-foreground: 20 14.3% 4.1%;
          
            --border: 20 5.9% 90%;
            --input: 20 5.9% 90%;
          
            --primary: 24 9.8% 10%;
            --primary-foreground: 60 9.1% 97.8%;
          
            --secondary: 60 4.8% 95.9%;
            --secondary-foreground: 24 9.8% 10%;
          
            --accent: 60 4.8% 95.9%;
            --accent-foreground: 24 9.8% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 20 14.3% 4.1%;
          
            --radius: 0.5rem;
          }
          
          .theme-stone.dark {
            --background: 20 14.3% 4.1%;
            --foreground: 60 9.1% 97.8%;
          
            --muted: 12 6.5% 15.1%;
            --muted-foreground: 24 5.4% 63.9%;
          
            --popover: 20 14.3% 4.1%;
            --popover-foreground: 60 9.1% 97.8%;
          
            --card: 20 14.3% 4.1%;
            --card-foreground: 60 9.1% 97.8%;
          
            --border: 12 6.5% 15.1%;
            --input: 12 6.5% 15.1%;
          
            --primary: 60 9.1% 97.8%;
            --primary-foreground: 24 9.8% 10%;
          
            --secondary: 12 6.5% 15.1%;
            --secondary-foreground: 60 9.1% 97.8%;
          
            --accent: 12 6.5% 15.1%;
            --accent-foreground: 60 9.1% 97.8%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 24 5.7% 82.9%;
          }
          
          .theme-gray {
            --background: 0 0% 100%;
            --foreground: 224 71.4% 4.1%;
          
            --muted: 220 14.3% 95.9%;
            --muted-foreground: 220 8.9% 46.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 224 71.4% 4.1%;
          
            --card: 0 0% 100%;
            --card-foreground: 224 71.4% 4.1%;
          
            --border: 220 13% 91%;
            --input: 220 13% 91%;
          
            --primary: 220.9 39.3% 11%;
            --primary-foreground: 210 20% 98%;
          
            --secondary: 220 14.3% 95.9%;
            --secondary-foreground: 220.9 39.3% 11%;
          
            --accent: 220 14.3% 95.9%;
            --accent-foreground: 220.9 39.3% 11%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 20% 98%;
          
            --ring: 224 71.4% 4.1%;
          
            --radius: 0.5rem;
          }
          
          .theme-gray.dark {
            --background: 224 71.4% 4.1%;
            --foreground: 210 20% 98%;
          
            --muted: 215 27.9% 16.9%;
            --muted-foreground: 217.9 10.6% 64.9%;
          
            --popover: 224 71.4% 4.1%;
            --popover-foreground: 210 20% 98%;
          
            --card: 224 71.4% 4.1%;
            --card-foreground: 210 20% 98%;
          
            --border: 215 27.9% 16.9%;
            --input: 215 27.9% 16.9%;
          
            --primary: 210 20% 98%;
            --primary-foreground: 220.9 39.3% 11%;
          
            --secondary: 215 27.9% 16.9%;
            --secondary-foreground: 210 20% 98%;
          
            --accent: 215 27.9% 16.9%;
            --accent-foreground: 210 20% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 20% 98%;
          
            --ring: 216 12.2% 83.9%;
          }
          
          .theme-neutral {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
          
            --muted: 0 0% 96.1%;
            --muted-foreground: 0 0% 45.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 0 0% 3.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 0 0% 3.9%;
          
            --border: 0 0% 89.8%;
            --input: 0 0% 89.8%;
          
            --primary: 0 0% 9%;
            --primary-foreground: 0 0% 98%;
          
            --secondary: 0 0% 96.1%;
            --secondary-foreground: 0 0% 9%;
          
            --accent: 0 0% 96.1%;
            --accent-foreground: 0 0% 9%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 0 0% 3.9%;
          
            --radius: 0.5rem;
          }
          
          .theme-neutral.dark {
            --background: 0 0% 3.9%;
            --foreground: 0 0% 98%;
          
            --muted: 0 0% 14.9%;
            --muted-foreground: 0 0% 63.9%;
          
            --popover: 0 0% 3.9%;
            --popover-foreground: 0 0% 98%;
          
            --card: 0 0% 3.9%;
            --card-foreground: 0 0% 98%;
          
            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;
          
            --primary: 0 0% 98%;
            --primary-foreground: 0 0% 9%;
          
            --secondary: 0 0% 14.9%;
            --secondary-foreground: 0 0% 98%;
          
            --accent: 0 0% 14.9%;
            --accent-foreground: 0 0% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 0 0% 83.1%;
          }
          
          .theme-red {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
          
            --muted: 0 0% 96.1%;
            --muted-foreground: 0 0% 45.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 0 0% 3.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 0 0% 3.9%;
          
            --border: 0 0% 89.8%;
            --input: 0 0% 89.8%;
          
            --primary: 0 72.2% 50.6%;
            --primary-foreground: 0 85.7% 97.3%;
          
            --secondary: 0 0% 96.1%;
            --secondary-foreground: 0 0% 9%;
          
            --accent: 0 0% 96.1%;
            --accent-foreground: 0 0% 9%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 0 72.2% 50.6%;
          
            --radius: 0.5rem;
          }
          
          .theme-red.dark {
            --background: 0 0% 3.9%;
            --foreground: 0 0% 98%;
          
            --muted: 0 0% 14.9%;
            --muted-foreground: 0 0% 63.9%;
          
            --popover: 0 0% 3.9%;
            --popover-foreground: 0 0% 98%;
          
            --card: 0 0% 3.9%;
            --card-foreground: 0 0% 98%;
          
            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;
          
            --primary: 0 72.2% 50.6%;
            --primary-foreground: 0 85.7% 97.3%;
          
            --secondary: 0 0% 14.9%;
            --secondary-foreground: 0 0% 98%;
          
            --accent: 0 0% 14.9%;
            --accent-foreground: 0 0% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 0 72.2% 50.6%;
          }
          
          .theme-rose {
            --background: 0 0% 100%;
            --foreground: 240 10% 3.9%;
          
            --muted: 240 4.8% 95.9%;
            --muted-foreground: 240 3.8% 46.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 240 10% 3.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 240 10% 3.9%;
          
            --border: 240 5.9% 90%;
            --input: 240 5.9% 90%;
          
            --primary: 346.8 77.2% 49.8%;
            --primary-foreground: 355.7 100% 97.3%;
          
            --secondary: 240 4.8% 95.9%;
            --secondary-foreground: 240 5.9% 10%;
          
            --accent: 240 4.8% 95.9%;
            --accent-foreground: 240 5.9% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 346.8 77.2% 49.8%;
          
            --radius: 0.5rem;
          }
          
          .theme-rose.dark {
            --background: 20 14.3% 4.1%;
            --foreground: 0 0% 95%;
          
            --muted: 0 0% 15%;
            --muted-foreground: 240 5% 64.9%;
          
            --popover: 0 0% 9%;
            --popover-foreground: 0 0% 95%;
          
            --card: 24 9.8% 10%;
            --card-foreground: 0 0% 95%;
          
            --border: 240 3.7% 15.9%;
            --input: 240 3.7% 15.9%;
          
            --primary: 346.8 77.2% 49.8%;
            --primary-foreground: 355.7 100% 97.3%;
          
            --secondary: 240 3.7% 15.9%;
            --secondary-foreground: 0 0% 98%;
          
            --accent: 12 6.5% 15.1%;
            --accent-foreground: 0 0% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 85.7% 97.3%;
          
            --ring: 346.8 77.2% 49.8%;
          }
          
          .theme-orange {
            --background: 0 0% 100%;
            --foreground: 20 14.3% 4.1%;
          
            --muted: 60 4.8% 95.9%;
            --muted-foreground: 25 5.3% 44.7%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 20 14.3% 4.1%;
          
            --card: 0 0% 100%;
            --card-foreground: 20 14.3% 4.1%;
          
            --border: 20 5.9% 90%;
            --input: 20 5.9% 90%;
          
            --primary: 24.6 95% 53.1%;
            --primary-foreground: 60 9.1% 97.8%;
          
            --secondary: 60 4.8% 95.9%;
            --secondary-foreground: 24 9.8% 10%;
          
            --accent: 60 4.8% 95.9%;
            --accent-foreground: 24 9.8% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 24.6 95% 53.1%;
          
            --radius: 0.5rem;
          }
          
          .theme-orange.dark {
            --background: 20 14.3% 4.1%;
            --foreground: 60 9.1% 97.8%;
          
            --muted: 12 6.5% 15.1%;
            --muted-foreground: 24 5.4% 63.9%;
          
            --popover: 20 14.3% 4.1%;
            --popover-foreground: 60 9.1% 97.8%;
          
            --card: 20 14.3% 4.1%;
            --card-foreground: 60 9.1% 97.8%;
          
            --border: 12 6.5% 15.1%;
            --input: 12 6.5% 15.1%;
          
            --primary: 20.5 90.2% 48.2%;
            --primary-foreground: 60 9.1% 97.8%;
          
            --secondary: 12 6.5% 15.1%;
            --secondary-foreground: 60 9.1% 97.8%;
          
            --accent: 12 6.5% 15.1%;
            --accent-foreground: 60 9.1% 97.8%;
          
            --destructive: 0 72.2% 50.6%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 20.5 90.2% 48.2%;
          }
          
          .theme-green {
            --background: 0 0% 100%;
            --foreground: 240 10% 3.9%;
          
            --muted: 240 4.8% 95.9%;
            --muted-foreground: 240 3.8% 46.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 240 10% 3.9%;
          
            --card: 0 0% 100%;
            --card-foreground: 240 10% 3.9%;
          
            --border: 240 5.9% 90%;
            --input: 240 5.9% 90%;
          
            --primary: 142.1 76.2% 36.3%;
            --primary-foreground: 355.7 100% 97.3%;
          
            --secondary: 240 4.8% 95.9%;
            --secondary-foreground: 240 5.9% 10%;
          
            --accent: 240 4.8% 95.9%;
            --accent-foreground: 240 5.9% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
          
            --ring: 142.1 76.2% 36.3%;
          
            --radius: 0.5rem;
          }
          
          .theme-green.dark {
            --background: 20 14.3% 4.1%;
            --foreground: 0 0% 95%;
          
            --muted: 0 0% 15%;
            --muted-foreground: 240 5% 64.9%;
          
            --popover: 0 0% 9%;
            --popover-foreground: 0 0% 95%;
          
            --card: 24 9.8% 10%;
            --card-foreground: 0 0% 95%;
          
            --border: 240 3.7% 15.9%;
            --input: 240 3.7% 15.9%;
          
            --primary: 142.1 70.6% 45.3%;
            --primary-foreground: 144.9 80.4% 10%;
          
            --secondary: 240 3.7% 15.9%;
            --secondary-foreground: 0 0% 98%;
          
            --accent: 12 6.5% 15.1%;
            --accent-foreground: 0 0% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 85.7% 97.3%;
          
            --ring: 142.4 71.8% 29.2%;
          }
          
          .theme-yellow {
            --background: 0 0% 100%;
            --foreground: 20 14.3% 4.1%;
          
            --muted: 60 4.8% 95.9%;
            --muted-foreground: 25 5.3% 44.7%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 20 14.3% 4.1%;
          
            --card: 0 0% 100%;
            --card-foreground: 20 14.3% 4.1%;
          
            --border: 20 5.9% 90%;
            --input: 20 5.9% 90%;
          
            --primary: 47.9 95.8% 53.1%;
            --primary-foreground: 26 83.3% 14.1%;
          
            --secondary: 60 4.8% 95.9%;
            --secondary-foreground: 24 9.8% 10%;
          
            --accent: 60 4.8% 95.9%;
            --accent-foreground: 24 9.8% 10%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 20 14.3% 4.1%;
          
            --radius: 0.5rem;
          }
          
          .theme-yellow.dark {
            --background: 20 14.3% 4.1%;
            --foreground: 60 9.1% 97.8%;
          
            --muted: 12 6.5% 15.1%;
            --muted-foreground: 24 5.4% 63.9%;
          
            --popover: 20 14.3% 4.1%;
            --popover-foreground: 60 9.1% 97.8%;
          
            --card: 20 14.3% 4.1%;
            --card-foreground: 60 9.1% 97.8%;
          
            --border: 12 6.5% 15.1%;
            --input: 12 6.5% 15.1%;
          
            --primary: 47.9 95.8% 53.1%;
            --primary-foreground: 26 83.3% 14.1%;
          
            --secondary: 12 6.5% 15.1%;
            --secondary-foreground: 60 9.1% 97.8%;
          
            --accent: 12 6.5% 15.1%;
            --accent-foreground: 60 9.1% 97.8%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 60 9.1% 97.8%;
          
            --ring: 35.5 91.7% 32.9%;
          }
          
          .theme-violet {
            --background: 0 0% 100%;
            --foreground: 224 71.4% 4.1%;
          
            --muted: 220 14.3% 95.9%;
            --muted-foreground: 220 8.9% 46.1%;
          
            --popover: 0 0% 100%;
            --popover-foreground: 224 71.4% 4.1%;
          
            --card: 0 0% 100%;
            --card-foreground: 224 71.4% 4.1%;
          
            --border: 220 13% 91%;
            --input: 220 13% 91%;
          
            --primary: 262.1 83.3% 57.8%;
            --primary-foreground: 210 20% 98%;
          
            --secondary: 220 14.3% 95.9%;
            --secondary-foreground: 220.9 39.3% 11%;
          
            --accent: 220 14.3% 95.9%;
            --accent-foreground: 220.9 39.3% 11%;
          
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 20% 98%;
          
            --ring: 262.1 83.3% 57.8%;
          
            --radius: 0.5rem;
          }
          
          .theme-violet.dark {
            --background: 224 71.4% 4.1%;
            --foreground: 210 20% 98%;
          
            --muted: 215 27.9% 16.9%;
            --muted-foreground: 217.9 10.6% 64.9%;
          
            --popover: 224 71.4% 4.1%;
            --popover-foreground: 210 20% 98%;
          
            --card: 224 71.4% 4.1%;
            --card-foreground: 210 20% 98%;
          
            --border: 215 27.9% 16.9%;
            --input: 215 27.9% 16.9%;
          
            --primary: 263.4 70% 50.4%;
            --primary-foreground: 210 20% 98%;
          
            --secondary: 215 27.9% 16.9%;
            --secondary-foreground: 210 20% 98%;
          
            --accent: 215 27.9% 16.9%;
            --accent-foreground: 210 20% 98%;
          
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 20% 98%;
          
            --ring: 263.4 70% 50.4%;
          }
        `,
      },
    ],
    rules: [
      [
        'accordion-down',
        {
          animation: 'shadcn-down 0.2s ease-out',
        },
      ],
      [
        'accordion-up',
        {
          animation: 'shadcn-up 0.2s ease-out',
        },
      ],
      [
        'animate-in',
        {
          'animation-name': 'shadcn-enter',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-enter-opacity': 'initial',
          '--un-enter-scale': 'initial',
          '--un-enter-rotate': 'initial',
          '--un-enter-translate-x': 'initial',
          '--un-enter-translate-y': 'initial',
        },
      ],
      [
        'animate-out',
        {
          'animation-name': 'shadcn-exit',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-exit-opacity': 'initial',
          '--un-exit-scale': 'initial',
          '--un-exit-rotate': 'initial',
          '--un-exit-translate-x': 'initial',
          '--un-exit-translate-y': 'initial',
        },
      ],
      [/^fade-in-?(.+)?$/, ([, d]) => ({ '--un-enter-opacity': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^fade-out-?(.+)?$/, ([, d]) => ({ '--un-exit-opacity': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^zoom-in-?(.+)?$/, ([, d]) => ({ '--un-enter-scale': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^zoom-out-?(.+)?$/, ([, d]) => ({ '--un-exit-scale': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^spin-in-?(.+)?$/, ([, d]) => ({ '--un-enter-rotate': `${Number(handleMatchNumber(d) || 0)}deg` })],
      [/^spin-out-?(.+)?$/, ([, d]) => ({ '--un-exit-rotate': `${Number(handleMatchNumber(d) || 0)}deg` })],
      [/^slide-in-from-top-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-y': `-${handleMatchRem(d)}` })],
      [/^slide-in-from-bottom-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-y': handleMatchRem(d) })],
      [/^slide-in-from-left-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-x': `-${handleMatchRem(d)}` })],
      [/^slide-in-from-right-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-x': handleMatchRem(d) })],
      [/^slide-out-to-top-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-y': `-${handleMatchRem(d)}` })],
      [/^slide-out-to-bottom-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-y': handleMatchRem(d) })],
      [/^slide-out-to-left-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-x': `-${handleMatchRem(d)}` })],
      [/^slide-out-to-right-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-x': handleMatchRem(d) })],
    ],
    theme: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  }
}

export default presetShadcn
