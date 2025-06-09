import { ref, computed } from 'vue'
import axios from 'axios'

export function useReview() {
  const showModal = ref(false)
  const comment = ref('')
  const classification = ref<number | null>(null)
  const reviews = ref<any[]>([])

  const currentPage = ref(1)
  const perPage = 5

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const submitReview = async (): Promise<boolean> => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (!token || !userId) {
      alert('Você precisa estar logado para enviar uma avaliação.')
      return false
    }

    try {
      await axios.post(
        'http://localhost:3000/review/store',
        {
          user: Number(userId),
          comments: comment.value,
          classification: classification.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert('Avaliação enviada com sucesso!')
      comment.value = ''
      classification.value = null
      await fetchReviews()
      return true
    } catch (err) {
      alert('Erro ao enviar avaliação.')
      console.error(err)
      return false
    }
  }

const fetchReviews = async () => {
  let token = localStorage.getItem('token')
  if(token?.length === 0) token = ''

  try {
    const response = await axios.post('http://localhost:3000/review/index',
      {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    )
    const data = response.data || []

    reviews.value = data.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  } catch (err) {
    console.error('Erro ao buscar avaliações:', err)
  }
}

  const paginatedReviews = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return reviews.value.slice(start, start + perPage)
  })

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return (
      date.toLocaleDateString('pt-BR') +
      ' - ' +
      date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    )
  }

  const updateReview = async (reviewId: number, newComment: string, newClassification: number) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (!token || !userId) return alert('Você precisa estar logado.')

    try {
      await axios.put(`http://localhost:3000/review/update/${reviewId}`, {
        user: Number(userId),
        comments: newComment,
        classification: newClassification
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      alert('Avaliação atualizada com sucesso.')
      await fetchReviews()
    } catch (err) {
      console.error('Erro ao atualizar avaliação:', err)
      alert('Erro ao atualizar avaliação.')
    }
  }

  const deleteReview = async (reviewId: number) => {
    const token = localStorage.getItem('token')

    if (!token) return alert('Você precisa estar logado.')

    try {
      await axios.delete(`http://localhost:3000/review/delete/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      alert('Avaliação deletada com sucesso.')
      await fetchReviews()
    } catch (err) {
      console.error('Erro ao deletar avaliação:', err)
      alert('Erro ao deletar avaliação.')
    }
  }

  return {
    showModal,
    comment,
    classification,
    toggleModal,
    submitReview,
    reviews,
    fetchReviews,
    formatDate,
    paginatedReviews,
    currentPage,
    perPage,
    updateReview,
    deleteReview
  }
}