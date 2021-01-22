const pkg = require('./package')
const github = require('./config/github.js')

// use custom domain cashier.yunyoujun.cn
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
// const routerBase =
//   process.env.DEPLOY_ENV === 'GH_PAGES'
//     ? {
//         router: {
//           base: '/' + pkg.name + '/'
//         }
//       }
//     : {}

export default {
  env: {
    github
  },

  // ...routerBase,

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
    script: [{ src: '//at.alicdn.com/t/font_1017190_jutl6s8x6ee.js' }],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
        // process.env.DEPLOY_ENV === 'GH_PAGES'
        //   ? '/' + pkg.name + '/favicon.ico'
        //   : '/favicon.ico'
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
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: 'https://sqgxqvmq.api.lncld.net/1.1/'
    // proxy: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // proxy: {
  //   '/github/': {
  //     target: 'https://github.com',
  //     pathRewrite: { '^/github/': '' }
  //   }
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
