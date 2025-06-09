import { ref } from 'vue'

const userName = ref('')

export function useUserStore() {
  function setUser(name: string) {
    userName.value = name
  }

  function clearUser() {
    userName.value = ''
  }

  return {
    userName,
    setUser,
    clearUser
  }
}
