<template>
  <div class="mt-16 px-4 max-w-4xl mx-auto">
    <!-- Lista de Avaliações -->
    <div v-if="paginatedReviews.length">
      <h2 class="text-xl font-semibold mb-4 text-pink-600">Avaliações Recentes</h2>
      <div v-for="review in paginatedReviews" :key="review.id" class="mb-4 p-4 rounded-xl bg-white bg-opacity-70 shadow-md">
        <div class="flex justify-between items-center">
          <span class="font-bold">{{ review.fullName || 'Usuário' }}</span>
          <span class="text-yellow-500">
            {{ '★'.repeat(review.classification) }}{{ '☆'.repeat(5 - review.classification) }}
          </span>
        </div>
        <p class="mt-2 text-sm text-gray-700">{{ review.comments }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ formatDate(review.created_at) }}</p>
      </div>
    </div>

    <!-- Botão para abrir modal -->
    <div class="mt-10 text-center">
      <button
        class="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
        @click="toggleModal"
      >
        Deixe sua avaliação
      </button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" @click.self="toggleModal">
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h3 class="text-lg font-bold mb-4">Enviar Avaliação</h3>

        <textarea
          v-model="comment"
          placeholder="Seu comentário..."
          class="w-full p-2 border border-gray-300 rounded-md mb-4"
          rows="3"
        ></textarea>

        <div class="mb-4">
          <label class="block font-medium mb-1">Classificação (1 a 5):</label>
          <input
            type="number"
            min="1"
            max="5"
            v-model.number="classification"
            class="w-20 p-1 border border-gray-300 rounded"
          />
        </div>

        <div class="flex justify-end gap-2">
          <button
            @click="toggleModal"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
          >
            Cancelar
          </button>
          <button
            @click="handleSubmit"
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useReview } from '@/composables/useReview'

const {
  showModal,
  toggleModal,
  comment,
  classification,
  submitReview,
  fetchReviews,
  reviews,
  paginatedReviews,
  formatDate
} = useReview()

const handleSubmit = async () => {
  const success = await submitReview()
  if (success) {
    toggleModal()
    await fetchReviews()
  }
}

onMounted(fetchReviews)
</script>