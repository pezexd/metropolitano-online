// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/seo"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  site: {
    name: "U.E Colegio Metropolitano Puerto Ordaz",
  },
  seo: {
    meta: {
      description: "Institución educativa privada de excelencia académica.",
    },
  },
});
