export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  nitro: {
    compressPublicAssets: true, 
    prerender: { routes: ["/"] },
    routeRules: {
      "/_nuxt/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
      "/images/**": { headers: { "Cache-Control": "public, max-age=604800" } },
    },
  },

  vite: {
    esbuild: {
      drop: ["console", "debugger"], 
    },
    build: {
      minify: "terser",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor"; 
            }
          },
        },
      },
      
    },
  },

  build: {
    analyze: false,
    transpile: ["@nuxtjs/tailwindcss"],
  },

  runtimeConfig: {
    public: {
      image: {
        provider: "ipx",
        format: ["webp", "avif"],
        quality: 75,
        sizes: [320, 640, 768, 1024, 1280, 1920],
        presets: {
          hero: {
            modifiers: { width: 1920, height: 1080, quality: 75, fit: "cover" },
          },
          thumbnail: {
            modifiers: { width: 300, height: 200, quality: 60, fit: "cover" },
          },
          mobile: { modifiers: { width: 768, quality: 70, fit: "cover" } },
        },
      },
    },
  },

  tailwindcss: {
    viewer: false,
    exposeConfig: false,
    config: {
      purge: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
      ],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      title: "Nom du restaurant - Gastronomie Durable",
      meta: [
        {
          name: "description",
          content:
            "Découvrez notre restaurant gastronomique durable avec des pâtisseries raffinées et des produits locaux.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" }, 
        { rel: "prefetch", href: "/slide-1.webp", fetchpriority: "high" },
      ],
      script: [
      ],
    },
  },
});
