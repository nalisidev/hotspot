import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import presetShadcn from './preset.shadcn'
import { Theme } from 'unocss/preset-mini'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:2',
    'bg-base': 'bg-background',
    'animate-accordion-up': 'accordion-up',
    'animate-accordion-down': 'accordion-down',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'Quicksand',
      },
    }),
    presetTypography(),
    presetShadcn(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
})
