// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  // modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.css',
  ],
  // pwa: {
  //   manifest: {
  //     name: "WareZap",
  //     short_name: "WareZap",
  //     description: "Gerenciamento Inteligente",
  //     icons: [
  //       {
  //         src: "icons/icon_64x64.png",
  //         sizes: "64x64",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_144x144.png",
  //         sizes: "144x144",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   // workbox: {
  //   //   navigateFallback: '/'
  //   // },
  //   devOptions:{
  //     enabled: true,
  //     type: 'module'
  //   }
  // },
  ssr: false
})
