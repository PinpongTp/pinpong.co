export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pinpong.co',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Welcome to Pinpong Tongpat's personal website, located at pinpong.co! As a talented web developer, I specialize in creating stunning and functional web applications. My expertise in front-end and back-end development allows me to provide comprehensive solutions for all your web development needs. Whether you're looking to build a responsive website, integrate a database, or bring your digital vision to life, I'm here to help. Check out my portfolio and see for yourself why I'm the web developer you've been looking for. Get in touch with me today at pinpong.co to discuss your next project.`,
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/gtm'],

  gtm: {
    id: 'GTM-W4BPB8B',
  },

  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
