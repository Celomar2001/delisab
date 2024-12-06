export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 600, 700],
      'Poppins': [300, 400, 500, 600]
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'Deliciosas y Sabrosas - Pastelería Artesanal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pastelería artesanal de alta calidad. Tortas personalizadas para cada ocasión.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  devtools: {
    enabled: false
  },

  compatibilityDate: '2024-11-29'
})