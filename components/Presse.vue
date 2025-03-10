<template>
  <section 
    id="presse"
    class="container mx-auto px-6 py-12 md:py-20">
    
    <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8 md:mb-12 text-left">
      On parle de nous
    </h2>

    <p class="text-gray-700 text-lg md:text-xl mb-8 md:mb-12 text-left">
      Nos dernières parutions dans la presse et sur internet.
    </p>

    <div class="flex flex-wrap justify-center md:justify-between items-center gap-6">
      <img 
        v-for="(image, index) in presseImages" 
        :key="index" 
        :src="image" 
        :alt="`Logo ${getLogoName(image)}`" 
        width="150" 
        height="60"
        class="h-12 md:h-16 w-auto object-contain transition-opacity duration-500 ease-in-out opacity-0"
        :class="{ 'opacity-100': logoLoaded[index] }"
        loading="lazy"
        @load="onLogoLoad(index)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const presseImages = ref([
  '/logo-elle.svg',
  '/logo-lemonde.svg',
  '/logo-vogue.svg',
  '/logo-cntraveler.svg',
  '/fou-patesserie.svg'
]);

const logoLoaded = ref(Array(presseImages.value.length).fill(false));

const onLogoLoad = (index) => {
  logoLoaded.value[index] = true;
};

const getLogoName = (path) => path.split('/').pop().split('.')[0];
</script>

<style scoped>
.opacity-100 {
  opacity: 1;
}
</style>
