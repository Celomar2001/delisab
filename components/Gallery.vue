<template>
  <section id="galeria" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-amber-900 mb-12">Nuestras Creaciones</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(cake, index) in cakes" :key="index" class="rounded-lg overflow-hidden shadow-lg">
          <img :src="cake.image" :alt="cake.name" class="w-full h-64 object-cover">
          <div class="p-6 bg-white">
            <h3 class="font-semibold text-lg mb-2">{{ cake.name }}</h3>
            <p class="text-gray-600">{{ cake.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cakes = [
  {
    name: 'Torta de Chocolate y Frambuesa',
    description: 'Bizcochuelo de chocolate, relleno mixto de frambuesa natural.',
    image: '/images/torta1.jpg'
  },
  {
    name: 'Torta de Vainilla y Frutas',
    description: 'Bizcochuelo de vainilla con frutas frescas de temporada. Personalizable.',
    image: '/images/torta2.jpg'
  },
  {
    name: 'Torta Red Velvet',
    description: 'Clásica torta red velvet con frosting de queso crema. Perfecta para ocasiones especiales.',
    image: '/images/torta3.jpg'
  }
]
</script>