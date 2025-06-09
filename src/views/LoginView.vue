<script setup lang="ts">
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterModal from '@/components/RegisterModal.vue'

const { email, password, submitForm, error } = useLogin()
const isRegisterOpen = ref(false)
const router = useRouter()

function goBackHome() {
  router.push('/')
}
</script>

<template>
  <RegisterModal :isOpen="isRegisterOpen" @close="isRegisterOpen = false" />

  <div class="min-h-screen flex items-center justify-center bg-rose-100 px-4 relative">
    <!-- Botão Voltar -->
    <button
      @click="goBackHome"
      class="absolute top-4 left-4 text-pink-500 hover:text-pink-700 flex items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Voltar
    </button>

    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center space-y-4">
      <h2 class="text-xl font-bold text-purple-500 mb-4">Digite seu email ou cadastre-se</h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
      />

      <button
        type="submit"
        class="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-400 transition-colors"
      >
        Entrar
      </button>

      <div
        v-if="error"
        class="bg-red-200 text-black px-4 py-2 rounded border border-red-400 text-sm mt-2"
      >
        {{ error }}
      </div>

      <p class="text-sm text-gray-600 mt-4">
        Ainda não tem uma conta?
        <button type="button" @click="isRegisterOpen = true" class="text-pink-400 hover:underline">
          Cadastre-se
        </button>
      </p>
    </form>
  </div>
</template>
