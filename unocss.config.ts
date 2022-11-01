import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWind(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetRemToPx(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    extend: {
      animation: {
      },
    },
    boxShadow: {
      availability: '0 1px 4px 0 rgb(15 15 20 / 10%)',
    },
    breakpoints: {
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
      'max-2xl': { max: '1535px' },
      'sm': '639px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1279px',
      '2xl': '1535px',
    },
  },
  rules: [
    ['align-self-center', {
      'align-self': 'center',
    }],
    ['bg-top', {
      'background-image': 'url(\'https://mayberks.me/wp-content/uploads/2020/09/bg.jpg\')',
    }],
    ['pointer-events-all', {
      'pointer-events': 'all',
    }],
    ['webkit-box-pack-start', {
      '-webkit-box-pack': 'start',
    }],
    ['webkit-box-pack-center', {
      '-webkit-box-pack': 'center',
    }],
    ['webkit-box-pack-justify', {
      '-webkit-box-pack': 'justify',
    }],
    ['webkit-box-align-center', {
      '-webkit-box-align': 'center',
    }],
    ['webkit-font-antialiased', {
      '-webkit-font-smoothing': 'antialiased',
    }],
    ['webkit-box-direction-normal', {
      '-webkit-box-direction': 'normal',
    }],
    ['transform-none-important', {
      '-webkit-transform': 'none !important',
    }],
    ['font-stretch-normal', {
      'font-stretch': 'normal',
    }],
    ['font-size-inherit', {
      'font-size': 'inherit',
    }],
    ['text-rendering-auto', {
      'text-rendering': 'auto',
    }],
    ['font-variant-normal', {
      'font-variant': 'normal',
    }],
  ],
})
