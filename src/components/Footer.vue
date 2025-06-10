<script setup></script>

<template>
  <footer class="bg-white/30 backdrop-blur-sm text-purple-500 px-8 py-6 flex flex-col items-center shadow-md mt-8 text-sm">
    <p class="mb-2">© 2025 Studio Dela's. Todos os direitos reservados.</p>

    <div class="flex flex-col sm:flex-row sm:gap-8 items-center text-center sm:text-left">
      <div class="flex items-center gap-2 mb-2 sm:mb-0">
        <span class="material-symbols-outlined text-purple-600 text-base">call</span>
        <div>
          <p class="font-medium leading-tight">Agendamento</p>
          <p>(11) 91234-5678</p>
        </div>
      </div>

      <div class="flex items-center gap-2 mb-2 sm:mb-0">
        <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer">
          <span class="material-symbols-outlined text-green-500 text-base">chat</span>
        </a>
        <div>
          <p class="font-medium leading-tight">WhatsApp</p>
          <p>Fale Conosco</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <a href="mailto:contato@studiodelas.com" target="_blank">
          <span class="material-symbols-outlined text-blue-500 text-base">mail</span>
        </a>
        <div>
          <p class="font-medium leading-tight">Email</p>
          <p>contato@studiodelas.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  display: inline-block;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  direction: ltr;
}
</style>