<script setup>
import highlights from '@/assets/product/highlights.jpg'
import longHair from '@/assets/product/longHair.jpg'
import modernCut from '@/assets/product/modernCut.jpg'

const products = [
  {
    id: 1,
    image: highlights,
    title: 'Luzes Delicadas',
    description: 'Ilumine seu visual com luzes suaves e naturais.'
  },
  {
    id: 2,
    image: longHair,
    title: 'Cabelos Longos',
    description: 'Tratamento especial para manter fios longos e saudáveis.'
  },
  {
    id: 3,
    image: modernCut,
    title: 'Corte Moderno',
    description: 'Transforme seu estilo com cortes atuais e ousados.'
  }
]
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
    >
      <div class="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md border-4 border-white">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-full object-cover"
        />
      </div>
      <h2 class="text-lg font-semibold text-purple-600">{{ product.title }}</h2>
      <p class="text-sm text-gray-800 mt-1">{{ product.description }}</p>
    </div>
  </div>
</template>