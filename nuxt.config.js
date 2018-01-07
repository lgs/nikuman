const nodeExternals = require('webpack-node-externals')
module.exports = {
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.isClient) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-awesome/]
          })
        ]
      }
    },
    vendor: [
      'firebase',
      'vuexfire'
    ]
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
  css: [
    '~/assets/main.scss'
  ],
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nikuman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kinnikuman lgtm image viewer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://nikuman.netlify.com' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'white' },
  loadingIndicator: {
    name: 'circle',
    color: 'rebeccapurple',
    background: 'white'
  },
  manifest: {
    name: 'Nikuman',
    theme_color: 'rebeccapurple'
  },
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa'
  ],
  plugins: [
    '~/plugins/clipboard.js'
  ],
  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  }
}
