<script setup>
import hairstyle from '@/assets/portfolio/hairstyle.jpg'
const image = hairstyle
</script>

<template>
  <div class="w-80 h-80 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-purple-100 mx-auto">
    <div class="text-center">
      <img
        :src="image"
        alt="Profissional"
        class="w-40 h-40 object-cover rounded-full mx-auto mb-2 flex flex-col items-center text-center transition transform hover:scale-105"
      />
      <h3 class="text-lg font-semibold">Profissional</h3>
      <p class="text-sm">Especialista em cortes e coloração.</p>
    </div>
  </div>
</template>