<template>
  <div>
    <link rel="preload" as="image" href="/_nuxt/assets/slide-1.webp" />

    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: "preload", as: "image", href: "/slide-1.webp", type: "image/webp" },
    {
      rel: "preload",
      href: "https://fonts.gstatic.com/s/playfairdisplay/v29/PlayfairDisplay-Italic.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ]
});
</script>
