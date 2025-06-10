<script setup lang="ts">
import { useReviewSection } from '@/composables/useReviewSection'

const {
  reviews,
  fetchReviews,
  showModal,
  toggleModal,
  comment,
  classification,
  submitReview,
  updateReview,
  deleteReview,
  formatDate,
  paginatedReviews,
  openNewReview,
  editReview,
  handleSubmit,
  confirmDelete,
  isLoggedIn,
  userId,
  editModeReview
} = useReviewSection()
</script>

<template>
  <section class="mt-16 max-w-4xl mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6 text-center text-pink-600">Avaliações Recentes</h2>

    <div v-if="paginatedReviews.length" class="space-y-4 mb-10">
      <div
        v-for="review in paginatedReviews"
        :key="review.id"
        class="p-4 rounded-xl bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300 shadow"
      >
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-800">
            {{ review.fullName || 'Usuário' }}
          </span>
          <span class="text-yellow-500 text-lg">
            {{ '★'.repeat(review.classification) }}{{ '☆'.repeat(5 - review.classification) }}
          </span>
        </div>

        <p class="text-sm text-gray-700 mt-2">{{ review.comments }}</p>
        <p class="text-xs text-gray-600 mt-1">{{ formatDate(review.created_at) }}</p>

        <div
          v-if="isLoggedIn && (review.user === userId || review.user?.id === userId)"
          class="flex gap-3 mt-2"
        >
          <button @click="editReview(review)" class="text-sm text-blue-600 hover:underline">Editar</button>
          <button @click="confirmDelete(review.id)" class="text-sm text-red-600 hover:underline">Deletar</button>
        </div>
      </div>
    </div>

    <div class="text-center" v-if="isLoggedIn">
      <button
        class="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition"
        @click="openNewReview"
      >
        Deixe sua avaliação
      </button>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      @click.self="toggleModal"
    >
      <div class="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
        <h3 class="text-lg font-bold mb-4">
          {{ editModeReview ? 'Editar Avaliação' : 'Enviar Avaliação' }}
        </h3>

        <textarea
          v-model="comment"
          placeholder="Seu comentário..."
          class="w-full p-2 border border-gray-300 rounded mb-4"
          rows="3"
        ></textarea>

        <div class="mb-4">
          <label class="block font-medium mb-1">Classificação:</label>
          <div class="flex space-x-1">
            <button
              v-for="star in 5"
              :key="star"
              type="button"
              @click="classification = star"
              class="text-2xl focus:outline-none transition"
            >
              <span :class="star <= classification ? 'text-yellow-400' : 'text-gray-300'">★</span>
            </button>
          </div>
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
  </section>
</template>