import bodyParser from 'body-parser'
import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`~/assets/styles/main.css`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [`~plugins/core-components.js`, `~plugins/date-filter.js`],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      'https://nuxt-blog-46857-default-rtdb.firebaseio.com',
    credentials: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseURL:
      process.env.BASE_URL ||
      'https://nuxt-blog-46857-default-rtdb.firebaseio.com',
    fbAPIKEY: process.env.FB_API_KEY,
    appURL: 'http://localhost:3000',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  router: {
    middleware: 'log',
  },
  serverMiddleware: [
    bodyParser.json(), // parses incoming json body
    '~/api', // /index.js can be ommitted because it will look for index file automatically
  ],
  ssr: true,
  generate: {
    routes: async function () {
      const res = await axios.get(
        'https://nuxt-blog-46857-default-rtdb.firebaseio.com/posts.json'
      )
      const routes = []
      for (const key in res.data) {
        routes.push({
          route: '/posts/' + key,
          payload: { postData: res.data[key] },
        })
      }
      return routes
    },
  },
}
