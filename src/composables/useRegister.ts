import { ref } from 'vue'
import axios from 'axios'

const fullName = ref('')
const email = ref('')
const password = ref('')

export default function useRegister(onSuccess?: () => void) {
  async function submitRegister() {
    try {
      await axios.post('http://localhost:3000/auth/store', {
        fullName: fullName.value,
        email: email.value,
        password: password.value
      })
      alert('Cadastro realizado com sucesso!')
      if (onSuccess) onSuccess()
      fullName.value = ''
      email.value = ''
      password.value = ''
    } catch (err: any) {
      alert('Erro ao registrar: ' + (err.response?.data || 'Erro desconhecido'))
    }
  }

  return { fullName, email, password, submitRegister }
}
