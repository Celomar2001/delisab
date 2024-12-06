<template>
  <nav class="fixed w-full z-50 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <h1 class="font-playfair text-2xl font-bold text-amber-800">
            Deliciosas y Sabrosas
          </h1>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex md:space-x-8">
          <template v-for="item in menuItems" :key="item.href">
            <a :href="item.href" 
               class="font-poppins text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200">
              {{ item.name }}
            </a>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu"
                  class="p-2 rounded-md text-amber-800 hover:bg-amber-50 transition-colors duration-200">
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="mobileMenuOpen" 
             class="absolute top-20 left-0 right-0 md:hidden bg-white shadow-lg">
          <div class="py-2 space-y-1 border-t border-amber-100">
            <a v-for="item in menuItems"
               :key="item.href"
               :href="item.href"
               class="block px-4 py-3 font-poppins text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-200"
               @click="closeMobileMenu">
              {{ item.name }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Productos', href: '#productos' },
  { name: 'Contacto', href: '#contacto' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>