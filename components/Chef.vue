<template>
  <section id="chef" class="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
    <div class="w-full md:w-1/2 text-center md:text-left flex flex-col justify-end h-full flex-grow pl-12 md:pl-12">
      <h2 class="text-5xl md:text-6xl font-bold text-gray-900">Le Chef</h2>

      <p class="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-md md:max-w-lg">
        Philippe Lugnac s’amuse autant à inventer qu’à réinventer, faire briller le répertoire classique parisien, 
        visiter de nouvelles terres avec attention et donner de l’éclat aux soirées festives qui se prolongent.
      </p>
    </div>

    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
      <NuxtImg
        src="/le-chef-2.webp"
        alt="Le Chef"
        format="webp"
        quality="85"
        width="600"
        height="400"
        class="max-w-full h-auto shadow-lg"
        loading="lazy"
        fit="inside"
      />
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

const imageLoaded = ref(false);
</script>

<style scoped>
.nuxt-img {
  object-fit: cover !important;
  max-width: 100%;
  height: auto;
}
.opacity-100 {
  opacity: 1;
}
</style>
