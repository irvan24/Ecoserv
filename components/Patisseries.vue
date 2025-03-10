<template>
  <section
  id="patisseries"
    class="w-full bg-[#E6E1DC] px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-12"
  >
    <div class="w-full md:w-1/2 flex justify-center md:justify-start">
      <NuxtImg
        src="/nos-patisseries.webp"
        format="webp"
        alt="nos-patisseries"
        :modifiers="{ fit: 'cover', quality: 70 }"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        width="1200"
        height="800"
        class="w-full h-auto rounded-lg shadow-lg"
        priority
        preload
      />
    </div>

    <div
      class="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center px-6 md:px-12"
    >
    <h2 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
  <span class="block">Nos</span>
  <span class="block md:mt-1">Pâtisseries</span>
</h2>

      <p class="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-md md:max-w-lg">
        Créations originales, grands classiques revisités, gâteaux de voyage ou
        pour vos événements, découvrez le catalogue de nos produits disponibles
        en boutique...
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const imageLoaded = ref(false);
</script>

<style scoped>
.opacity-100 {
  opacity: 1;
}
</style>
