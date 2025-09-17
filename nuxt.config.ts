// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: 'M Zakiy Nurhasyim - Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack JavaScript Developer passionate about creating amazing web experiences with Vue.js, React.js, and Node.js' },
        { name: 'keywords', content: 'Full Stack Developer, JavaScript, Vue.js, React.js, Node.js, Web Developer' },
        { name: 'author', content: 'M Zakiy Nurhasyim' },
        { property: 'og:title', content: 'M Zakiy Nurhasyim - Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack JavaScript Developer passionate about creating amazing web experiences' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'M Zakiy Nurhasyim - Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack JavaScript Developer passionate about creating amazing web experiences' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/app.css']
})
