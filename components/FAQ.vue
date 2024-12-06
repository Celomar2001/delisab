<template>
  <section class="py-24 bg-amber-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-amber-900 mb-12">Preguntas Frecuentes</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-amber-200">
          <button
            class="flex justify-between items-center w-full py-4 text-left"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-medium">{{ faq.question }}</span>
            <ChevronDownIcon
              class="w-5 h-5 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === index }"
            />
          </button>
          <div
            v-show="openFaq === index"
            class="pb-4 text-gray-600"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const openFaq = ref(null)
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: '¿Con cuánta anticipación debo hacer mi pedido?',
    answer: 'Recomendamos hacer el pedido con al menos 1 semana de anticipación para tortas personalizadas. Para diseños más elaborados, sugerimos 2 semanas.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencias bancarias y todos los medios de pago digitales populares.'
  },
  {
    question: '¿Realizan entregas a domicilio?',
    answer: 'Sí, realizamos entregas a domicilio en toda la ciudad. El costo varía según la zona de entrega.'
  },
  {
    question: '¿Puedo personalizar el diseño de mi torta?',
    answer: 'Por supuesto, trabajamos contigo para crear el diseño perfecto que se ajuste a tus necesidades y preferencias.'
  }
]
</script>