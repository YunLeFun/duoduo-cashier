const pkg = require('./package')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/duoduo-cashier/'
        }
      }
    : {}

module.exports = {
  mode: 'spa',
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/duoduo-cashier/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui', '@/plugins/axios'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: 'https://sqgxqvmq.api.lncld.net/1.1/'
    // proxy: true
  },
  // proxy: {
  //   '/api/': {
  //     target: 'https://sqgxqvmq.api.lncld.net/1.1/',
  //     pathRewrite: { '^/api/': '' }
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    publicPath: '/nuxt/',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
