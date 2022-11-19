import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],

  // env: {
  //   github,
  // },

  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: pkg.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
      ],
      script: [{ src: '//at.alicdn.com/t/font_1017190_jutl6s8x6ee.js' }],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          // process.env.DEPLOY_ENV === 'GH_PAGES'
          //   ? '/' + pkg.name + '/favicon.ico'
          //   : '/favicon.ico'
        },
      ],
    },
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
})
