require('dotenv').config()
const path = require('path')

module.exports = {
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config) {
      config.resolve.alias['~src'] = path.resolve(__dirname, 'src')
    }
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
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
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js + Firebase + Netlify project'
      },
      {
        property: 'og:description',
        content: 'Nuxt.js + Firebase + Netlify project'
      },
      {
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/2681007/34653636-2bd735c6-f432-11e7-9b77-8ec76fa46286.jpeg'
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@jaxx2104' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'dns-prefetch', href: 'https://nikuman.jaxx2104.info' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js',
        integrity:
          'sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA',
        crossorigin: 'anonymous'
      }
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
    lang: 'ja',
    theme_color: 'rebeccapurple',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  modules: ['@nuxtjs/pwa'],
  render: {
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  },
  srcDir: 'src'
}
