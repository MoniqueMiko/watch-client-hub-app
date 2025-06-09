<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useReview } from '@/composables/useReview'

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
  formatDate
} = useReview()

// Recupera ID do usuário logado
const userId = ref<number | null>(getUserId())
const isLoggedIn = computed(() => !!userId.value)

function getUserId(): number | null {
  const raw = localStorage.getItem('userId')
  return raw ? Number(raw) : null
}

const editModeReview = ref(null)

function openNewReview() {
  comment.value = ''
  classification.value = null
  editModeReview.value = null
  toggleModal()
}

function editReview(review: any) {
  comment.value = review.comments
  classification.value = Number(review.classification)
  editModeReview.value = review
  showModal.value = true
}

async function handleSubmit() {
  if (editModeReview.value) {
    await updateReview(editModeReview.value.id, comment.value, classification.value)
    editModeReview.value = null
  } else {
    await submitReview()
  }

  comment.value = ''
  classification.value = null
  toggleModal()
  await fetchReviews()
}

async function confirmDelete(reviewId: number) {
  const confirm = window.confirm('Tem certeza que deseja deletar esta avaliação?')
  if (confirm) {
    await deleteReview(reviewId)
    await fetchReviews()
  }
}

const paginatedReviews = computed(() => {
  return reviews.value.slice(0, 5)
})

onMounted(fetchReviews)
</script>

<template>
  <section class="mt-16 max-w-4xl mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6 text-center text-pink-600">Avaliações Recentes</h2>

    <!-- Lista de avaliações -->
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

        <!-- Botões só se logado e for o autor -->
        <div
          v-if="isLoggedIn && (review.user === userId || review.user?.id === userId)"
          class="flex gap-3 mt-2"
        >
          <button @click="editReview(review)" class="text-sm text-blue-600 hover:underline">Editar</button>
          <button @click="confirmDelete(review.id)" class="text-sm text-red-600 hover:underline">Deletar</button>
        </div>
      </div>
    </div>

    <!-- Botão para abrir modal -->
    <div class="text-center" v-if="isLoggedIn">
      <button
        class="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition"
        @click="openNewReview"
      >
        Deixe sua avaliação
      </button>
    </div>

    <!-- Modal -->
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
  </section>
</template>