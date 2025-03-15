<template>
  <div class="relative w-full h-[500px] md:h-[90vh] overflow-hidden mt-[140px]">
    <div
  class="absolute top-[45%] left-[5%] md:left-[8%] text-black italic text-2xl md:text-3xl shadow-xl leading-relaxed tracking-wide z-20 font-playfair"
>
  <div class="inline-block bg-white/80 px-6 py-3">
    <span class="block pb-1 ">
      “Nous travaillons à l’émotion
    </span>
    <span class="block pb-1 ">
      pour proposer des pâtisseries inscrites
    </span>
    <span class="block pb-1">
      dans la gourmandise et la modernité.“
    </span>
  </div>
</div>



    <div class="relative w-full h-full">
      <div
        class="flex transition-transform duration-700 ease-in-out will-change-transform h-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="relative w-full flex-shrink-0 aspect-[16/9] md:aspect-auto"
        >
          <NuxtImg
            :src="image"
            :alt="`Slide ${index + 1} du carrousel`"
            format="webp"
            :modifiers="{ fit: 'cover', width: 800, height: 600, quality: 70 }"
            width="1200"
            height="760"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
            class="w-full h-full object-cover"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'low'"
          />
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 flex z-30">
      <button
        class="bg-[#F5EFEA] text-black p-3 hover:bg-white transition"
        @click="prevSlide"
        @keydown.left.prevent="prevSlide"
        aria-label="Image précédente"
      >
        &lt;
      </button>
      <button
        class="bg-[#F5EFEA] text-black p-3 hover:bg-white transition"
        @click="nextSlide"
        @keydown.right.prevent="nextSlide"
        aria-label="Image suivante"
      >
        &gt;
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
/* Empêche les conflits de hauteur */
.will-change-transform {
  will-change: transform;
}
</style>
