<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 1000)
})
</script>

<template>
  <div class="flex justify-center items-center min-h-[80vh] px-4">
    <section
      class="text-center max-w-3xl animate-fade-in"
      v-show="show"
    >
      <h2 class="text-2xl md:text-3xl font-bold mb-4 text-purple-400">
        Bem vindo ao Studio Dela’s
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify text-lg">
        O espaço onde a sua beleza é exaltada com carinho, profissionalismo e muito estilo.
        Mais do que um salão de beleza, somos um refúgio feito por mulheres e para mulheres, que entendem a importância de se cuidar,
        se amar e se sentir poderosa todos os dias.
        <br /><br />
        Aqui, cada detalhe foi pensado com muito amor para proporcionar uma experiência única e inesquecível. Nossa missão é transformar
        seu momento de beleza em um ritual de autoestima e bem-estar, respeitando sua individualidade e realçando o que você tem de mais autêntico.
        <br /><br />
        Venha viver essa experiência com a gente. No <strong>Studio Dela’s</strong>, você é protagonista da sua própria beleza. 💖
      </p>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}
</style>
