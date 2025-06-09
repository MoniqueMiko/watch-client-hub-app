<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
      <h2 class="text-xl font-bold text-purple-500 mb-4">Cadastre-se</h2>

      <form @submit.prevent="submitRegister" class="space-y-4">
        <input v-model="fullName" placeholder="Nome completo" class="input" />
        <input v-model="email" placeholder="Email" type="email" class="input" />
        <input v-model="password" placeholder="Senha" type="password" class="input" />
        <button type="submit" class="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-400">Registrar</button>
      </form>

      <p class="mt-4 text-sm text-gray-600">
        Já tem uma conta?
        <button @click="close" class="text-pink-400 hover:underline ml-1">Voltar</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRegister from '@/composables/useRegister'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const { fullName, email, password, submitRegister } = useRegister(() => emit('close'))

function close() {
  emit('close')
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300;
}
</style>
