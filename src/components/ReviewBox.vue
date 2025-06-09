<template>
  <div class="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-4">
    <h2 class="text-xl font-semibold">Avaliações Recentes</h2>

    <div v-if="reviews.length === 0" class="text-gray-500">Nenhuma avaliação ainda.</div>

    <ul v-else class="space-y-2 max-h-60 overflow-y-auto pr-2">
      <li v-for="review in reviews" :key="review.id" class="p-3 border rounded-lg bg-white/80">
        <div class="text-sm font-medium">{{ review.fullName }}</div>
        <div class="text-xs text-gray-600">{{ formatDate(review.created_at) }}</div>
        <div class="text-sm mt-1">"{{ review.comments }}"</div>
        <div class="text-sm text-purple-700">Nota: {{ review.classification }}</div>
      </li>
    </ul>

    <button @click="toggleModal" class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
      Deixe sua avaliação
    </button>

    <ReviewDialog
      v-if="showModal"
      :show="showModal"
      @close="toggleModal"
      @submitted="fetchReviews"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { format } from 'date-fns'
import ReviewDialog from './ReviewDialog.vue'

const showModal = ref(false)
const reviews = ref<any[]>([])

function toggleModal() {
  showModal.value = !showModal.value
}

function formatDate(date: string) {
  return format(new Date(date), 'dd/MM/yyyy - HH:mm')
}

async function fetchReviews() {
  try {
    const res = await axios.get('http://localhost:3000/review')
    reviews.value = res.data
  } catch (err) {
    console.error('Erro ao buscar avaliações:', err)
  }
}

onMounted(() => {
  fetchReviews()
})
</script>
