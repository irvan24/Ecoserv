<template>
  <section id="contact" class="container mx-auto px-6 py-12 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nous contacter</h2>
        <p class="text-lg md:text-xl text-gray-700 mb-6">
          Pour toute réservation, contactez directement le restaurant par téléphone.
        </p>
        
        <form @submit.prevent="submitForm" class="space-y-4">
          <label class="block text-gray-800 font-medium">
            Nom / Prénom* 
            <input type="text" id="name" v-model="form.name" required class="w-full bg-[#E6E1DC] p-3 border border-black rounded" autocomplete="name">
          </label>

          <label class="block text-gray-800 font-medium">
            Adresse e-mail* 
            <input type="email" id="email" v-model="form.email" required class="w-full bg-[#E6E1DC] p-3 border border-black rounded" autocomplete="email">
          </label>

          <label class="block text-gray-800 font-medium">
            Message* 
            <textarea id="message" v-model="form.message" required class="w-full bg-[#E6E1DC] p-3 border border-black h-28 rounded"></textarea>
          </label>

          <button type="submit" class="w-full bg-black text-white py-3 rounded hover:bg-opacity-80 transition">
            Envoyer
          </button>
        </form>
      </div>

      <div class="mt-6">
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
        <p class="text-xl md:text-2xl font-bold text-gray-900">Siège Lugnac</p>
        <p class="text-lg md:text-xl text-gray-700">4 rue Censier, Paris 7</p>
        <p class="text-lg md:text-xl text-gray-700">+33 (0)1 42 56 11 26</p>
      </div>
    </div>

    <!-- Réseaux sociaux -->
    <div class="bg-[#E6E1DC] w-full mt-20 py-8 text-center">
      <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Retrouvez-nous</h3>
      <div class="flex justify-center space-x-8">
        <a href="#" class="transition-opacity hover:opacity-75" aria-label="Instagram">
          <img src="/instagram.svg" alt="Instagram" class="w-12 h-12 md:w-14 md:h-14" />
        </a>

        <a href="#" class="transition-opacity hover:opacity-75" aria-label="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" class="w-12 h-12 md:w-14 md:h-14" />
        </a>

        <a href="#" class="transition-opacity hover:opacity-75" aria-label="Facebook">
          <img src="/facebook.svg" alt="Facebook" class="w-12 h-12 md:w-14 md:h-14" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  alert('Formulaire soumis (simulation)');
};
</script>
