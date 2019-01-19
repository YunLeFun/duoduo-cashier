const pkg = require('./package')
const github = require('./config/github.js')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/' + pkg.name + '/'
        }
      }
    : {}

module.exports = {
  env: {
    github
  },
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
    script: [{ src: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js' }],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          process.env.DEPLOY_ENV === 'GH_PAGES'
            ? '/' + pkg.name + '/favicon.ico'
            : '/favicon.ico'
      }
    ]
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
  //   '/github/': {
  //     target: 'https://github.com',
  //     pathRewrite: { '^/github/': '' }
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
