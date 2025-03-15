<template>
  <section class="bg-[#E6E1DC] w-full px-6 lg:px-16 xl:px-24 py-12 md:py-20">
    <div class="max-w-screen-xl mx-19">
      <!-- Titre aligné comme sur la maquette -->
      <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8 md:mb-12 text-left">
        Où nous trouver ?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image de la carte bien alignée -->
        <div class="w-full flex justify-center md:justify-start">
          <NuxtImg
            src="/map-interactive.webp"
            alt="Carte de localisation des boutiques Philippe Lugnac"
            format="webp"
            :modifiers="{ fit: 'inside', quality: 70 }"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
            width="1000"
            height="700"
            class="w-full max-w-[600px] md:max-w-[700px] object-contain"
            priority
            preload
          />
        </div>

        <!-- Liste des adresses bien alignée -->
        <ul class="space-y-6 text-left">
          <li v-for="(lieu, index) in lieux" :key="index" class="fade-in">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">{{ lieu.nom }}</h3>
            <a 
              :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lieu.adresse)}`" 
              target="_blank"
              class="text-lg md:text-xl text-blue-600 hover:underline"
            >
              {{ lieu.adresse }}
            </a>
          </li>
        </ul>
      </div>
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
