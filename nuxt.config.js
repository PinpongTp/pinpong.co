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
        content: `Pinpong Tongpat's personal website, รวบรวมโน็ตวิธีการเทคนิคต่างๆในการเขียนโปรแกรมไว้เพื่อกันลืม และเผื่อจะเป็นข้อมูลให้เพื่อนๆ. ยินดีให้คำปรึกษา ในการเขียนโปรแกรม และเว็บไซต์ทุกรูปแบบ.`,
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
