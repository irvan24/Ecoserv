<template>
    <header class="fixed top-0 left-0 w-full bg-[#F5EFEA] shadow-md z-50">
        <div class="flex justify-center py-4">
            <NuxtImg 
                src="/logo.webp" 
                alt="Logo du restaurant Philippe Lignac" 
                format="webp"
                width="540"
                height="67"
                class="h-16 md:h-20 w-auto"
                priority
                preload
            />
        </div>

        <nav class="container mx-auto flex justify-center px-6 py-2">
            <ul class="hidden md:flex space-x-8">
                <li v-for="(item, index) in menuItems" :key="index">
                    <a 
                        :href="item.href" 
                        @click.prevent="scrollToSection(item.href)" 
                        class="nav-link" 
                        :aria-label="`Aller à la section ${item.label}`"
                    >
                        {{ item.label }}
                    </a>
                </li>
            </ul>

            <button 
                @click="menuOpen = !menuOpen" 
                class="md:hidden text-gray-900 focus:outline-none"
                :aria-expanded="menuOpen"
                aria-label="Ouvrir ou fermer le menu de navigation"
            >
                <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </nav>

        <Transition name="fade">
            <div v-show="menuOpen" class="md:hidden bg-white shadow-lg py-4">
                <ul class="flex flex-col items-center space-y-4">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <a 
                            :href="item.href"
                            @click.prevent="scrollToSection(item.href); menuOpen = false"
                            class="nav-link"
                            :aria-label="`Aller à la section ${item.label}`"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const menuOpen = ref(false);

const menuItems = ref([
    { label: "Le Chef", href: "#chef" },
    { label: "Nos Pâtisseries", href: "#patisseries" },
    { label: "Presse", href: "#presse" },
    { label: "Contact", href: "#contact" }
]);

const scrollToSection = async (id) => {
    await nextTick(); 

    const section = document.querySelector(id);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};
</script>

<style scoped>
.nav-link {
    @apply text-gray-700 hover:text-green-600 transition-colors duration-300 focus:ring-2 focus:ring-gray-500 rounded cursor-pointer;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .fade-enter-active, .fade-leave-active {
        transition: none;
    }
}
</style>
