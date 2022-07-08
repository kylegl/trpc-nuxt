import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'trpc-nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  trpc: {
    baseURL: 'http://localhost:3000',
    endpoint: '/trpc',
  },
  typescript: {
    strict: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  ssr: false,
})
