// src/composables/useReviewSection.ts
import { ref, computed, onMounted } from 'vue'
import { useReview } from './useReview'

interface Review {
  id: number
  comments: string
  classification: number
  created_at: string
  fullName?: string
  user?: number | { id: number; fullName?: string }
}

export function useReviewSection() {
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

  const userId = ref<number | null>(getUserId())
  const isLoggedIn = computed(() => userId.value !== null)

  function getUserId(): number | null {
    const stored = localStorage.getItem('userId')
    return stored ? Number(stored) : null
  }

  const editModeReview = ref<Review | null>(null)

  function openNewReview() {
    comment.value = ''
    classification.value = null
    editModeReview.value = null
    toggleModal()
  }

  function editReview(review: Review) {
    comment.value = review.comments
    classification.value = review.classification
    editModeReview.value = review
    showModal.value = true
  }

  async function handleSubmit() {
    if (editModeReview.value) {
      const { id } = editModeReview.value
      const rating = classification.value

      if (rating == null) {
        alert('Selecione uma nota antes de enviar.')
        return
      }

      await updateReview(id, comment.value, rating)
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

  const paginatedReviews = computed(() => reviews.value.slice(0, 5))

  onMounted(fetchReviews)

  return {
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
  }
}
