<script setup lang="ts">
import { useUserStore } from '@/composables/useStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const isLoggedIn = computed(() => userStore.userName.value !== '')
const userName = computed(() => userStore.userName.value)

function goToLogin() {
  router.push('/login')
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  userStore.clearUser()

  window.location.reload()
}

</script>

<template>
  <header class="bg-white/30 backdrop-blur-sm text-purple-500 px-8 py-4 flex justify-between items-center shadow-md">
    <h1 class="font-bold text-xl">Studio Dela's</h1>

    <div>
      <span v-if="isLoggedIn" class="text-sm mr-4">
        Bem-vindo, <strong>{{ userName }}</strong>!
      </span>
      <button
        v-if="isLoggedIn"
        @click="logout"
        class="px-4 py-1 rounded bg-red-300 text-white hover:bg-red-400 transition-colors duration-300"
      >
        Sair
      </button>
      <button
        v-else
        @click="goToLogin"
        class="px-4 py-1 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors duration-300"
      >
        Login
      </button>
    </div>
  </header>
</template>
