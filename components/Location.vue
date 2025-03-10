<template>
  <section class="container mx-auto px-6 py-12 md:py-20">
    <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8 md:mb-12 text-left">
      Où nous trouver ?
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="w-full">
        <NuxtImg
          src="/map-interactive.png"
          alt="Carte de localisation des boutiques Philippe Lugnac"
          format="webp"
          :modifiers="{ fit: 'inside', quality: 70 }"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
          width="1200"
          height="800"
          class="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
          priority
          preload
        />
      </div>

      <ul class="space-y-6">
        <li v-for="(lieu, index) in lieux" :key="index" class="fade-in">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">{{ lieu.nom }}</h3>
          <p class="text-lg md:text-xl text-gray-700">{{ lieu.adresse }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const lieux = ref([
  { nom: "Lugnac", adresse: "4 rue Censier, Paris 7" },
  { nom: "Aux Prés", adresse: "Boulevard de l’Hôpital, Paris 15" },
  { nom: "Le Chardenoux", adresse: "15 rue du Jura, Paris 11" }
]);
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
