// src/composables/useReviewSection.ts
import { ref, computed, onMounted } from 'vue'
import { useReview } from './useReview'

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
  const isLoggedIn = computed(() => !!userId.value)

  function getUserId(): number | null {
    const userId = localStorage.getItem('userId')
    return userId ? Number(userId) : null
  }

  const editModeReview = ref<any>(null)

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
