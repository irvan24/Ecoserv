<template>
  <div>
    <link rel="preload" as="image" href="/_nuxt/assets/slide-1.webp" />

    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: "preload", as: "image", href: "/slide-1.webp", type: "image/webp" }
  ]
});
</script>
