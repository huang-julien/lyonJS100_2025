// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    componentIslands: {
      selectiveClient: 'deep',
      remoteIsland: true
    }
  },

  runtimeConfig: {
    mySecret: 'pssss... it is a secret'
  }
})
