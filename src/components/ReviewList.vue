<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const reviews = ref<any[]>([])
const isLoading = ref(true)
const error = ref('')
const currentPage = ref(1)
const perPage = 5

const fetchReviews = async () => {
  isLoading.value = true
  try {
    const response = await axios.post('http://localhost:3000/review/index')
    // Idealmente, a API deveria retornar os reviews paginados, por enquanto fatiamos manualmente
    const all = response.data?.data || []
    reviews.value = all
  } catch (err) {
    error.value = 'Erro ao carregar avaliações.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const paginatedReviews = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return reviews.value.slice(start, start + perPage)
})

onMounted(fetchReviews)
</script>

<template>
  <div class="space-y-4 p-4">
    <h2 class="text-lg font-semibold text-gray-700">Avaliações recentes</h2>

    <div v-if="isLoading">Carregando avaliações...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else>
      <div
        v-for="review in paginatedReviews"
        :key="review.id"
        class="bg-white bg-opacity-70 rounded-xl shadow p-4"
      >
        <p class="font-bold">{{ review.fullName || 'Usuário' }}</p>
        <div class="text-yellow-500">
          {{ '★'.repeat(review.classification) + '☆'.repeat(5 - review.classification) }}
        </div>
        <p class="text-sm text-gray-700 mt-1">{{ review.comments }}</p>
      </div>

      <!-- Paginação simples -->
      <div class="flex gap-2 mt-4">
        <button
          class="bg-rose-400 text-white px-2 py-1 rounded disabled:opacity-50"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Anterior
        </button>
        <button
          class="bg-rose-400 text-white px-2 py-1 rounded"
          :disabled="currentPage * perPage >= reviews.length"
          @click="currentPage++"
        >
          Próximo
        </button>
      </div>
    </div>
  </div>
</template>