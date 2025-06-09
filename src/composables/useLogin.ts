import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/services/auth.service'
import { useUserStore } from '@/composables/useStore'

const email = ref('')
const password = ref('')
const error = ref('')

export default function useLogin() {
  const router = useRouter()
  const userStore = useUserStore()

  async function submitForm() {
    error.value = ''

    try {
      const response = await login(email.value, password.value)

      const { jwt, user } = response.data
      const access_token = jwt?.access_token
      const fullName = user?.fullName

      const userId = user?.id
      if (!access_token || !fullName || !userId) {
        throw new Error('Token ou usuário incompleto')
      }

      localStorage.setItem('token', access_token)
      localStorage.setItem('userId', userId.toString())
      localStorage.setItem('fullname', fullName)
      userStore.setUser(fullName)
      
      router.push('/')
    } catch (err: any) {
      console.error('Erro no login:', err)
      error.value = err.response?.data || err || 'Erro ao fazer login.'
    }
  }

  return {
    email,
    password,
    error,
    submitForm
  }
}
