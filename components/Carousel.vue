<template>
  <div
    class="relative w-full h-[500px] md:h-[1000px] overflow-hidden mt-[80px]"
  >
    <!-- Images du carrousel -->
    <div
      class="flex transition-transform duration-700 ease-in-out will-change-transform"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="`Slide ${index + 1} du carrousel`"
        format="webp"
        :modifiers="{ fit: 'cover', width: 800, height: 600, quality: 70 }"
        width="1200"
        height="760"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
        class="w-full h-full object-cover flex-shrink-0"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'low'"
      />
    </div>

    <!-- Boutons de navigation -->
    <div class="absolute bottom-4 right-4 flex space-x-4 z-10">
      <button
        class="bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        @click="prevSlide"
        @keydown.left.prevent="prevSlide"
        aria-label="Image précédente"
      >
        ◀
      </button>
      <button
        class="bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        @click="nextSlide"
        @keydown.right.prevent="nextSlide"
        aria-label="Image suivante"
      >
        ▶
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "/slide-1.webp",
  "/slide-2.webp",
  "/slide-3.webp",
  "/slide-4.webp",
]);

const currentIndex = ref(0);
let animationFrameId = null;

// Changement manuel via boutons avec `requestAnimationFrame`
const prevSlide = () => {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => {
    currentIndex.value =
      (currentIndex.value - 1 + images.value.length) % images.value.length;
  });
};

const nextSlide = () => {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  });
};
</script>

<style scoped>
/* Optimisation de la performance de l'animation */
.will-change-transform {
  will-change: transform;
}

/* Prévention des Layout Shifts */
div.relative {
  min-height: 500px;
}
@media (min-width: 768px) {
  div.relative {
    min-height: 1000px;
  }
}
</style>
