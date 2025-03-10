<template>
  <div class="bg-[#F5EFEA]">
    <Navbar />
    <Carousel />
    <Chef />
    <Patisseries />
    <Presse />
    <Location />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Chef from "@/components/Chef.vue";
import Patisseries from "@/components/Patisseries.vue";
import Presse from "@/components/Presse.vue";
import Location from "@/components/Location.vue";
import Contact from "@/components/Contact.vue";
import Footer from '@/components/Footer.vue';
</script>
