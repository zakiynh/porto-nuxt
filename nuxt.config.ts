// https://nuxt.com/docs/api/configuration/nuxt-config
import { PERSONAL_INFO } from './constants/personal'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      title: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.title}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: PERSONAL_INFO.description },
        { name: 'keywords', content: PERSONAL_INFO.meta.keywords },
        { name: 'author', content: PERSONAL_INFO.meta.author },
        { property: 'og:title', content: PERSONAL_INFO.meta.ogTitle },
        { property: 'og:description', content: PERSONAL_INFO.meta.ogDescription },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: PERSONAL_INFO.meta.twitterTitle },
        { name: 'twitter:description', content: PERSONAL_INFO.meta.twitterDescription }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/app.css']
})
