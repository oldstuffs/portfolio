import { defineNuxtConfig } from 'nuxt'
import { useNitro } from '@nuxt/kit'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
  unocss: {
    preflight: true,
  },
  css: [
    '~/styles/main.css',
  ],
  hooks: {
    ready: () => {
      useNitro()
    },
  },
})
