<template>
  <section id="productos" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-amber-900 mb-12">Productos y Servicios</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.title" 
             class="bg-white p-6 rounded-lg shadow-md border border-amber-100">
          <h3 class="text-xl font-semibold mb-4">{{ product.title }}</h3>
          <ul class="space-y-2">
            <li v-for="detail in product.details" :key="detail" class="flex items-center">
              <CheckIcon class="h-5 w-5 text-amber-600 mr-2" />
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid/index'

const products = [
  {
    title: 'Tortas Personalizadas',
    details: [
      'Diseños únicos',
      'Variedad de sabores',
      'Diferentes tamaños',
      'Decoraciones especiales'
    ]
  },
  {
    title: 'Servicios',
    details: [
      'Entrega a domicilio',
      'Asesoría personalizada',
      'Eventos especiales',
      'Pedidos corporativos'
    ]
  },
  {
    title: 'Especialidades',
    details: [
      'Tortas de boda',
      'Cupcakes decorados',
      'Postres temáticos',
      'Mesas dulces'
    ]
  }
]
</script>