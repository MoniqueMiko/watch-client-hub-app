<script setup>
import Header from '@/components/Header.vue'
import Portfolio from '@/components/Portfolio.vue'
import Instagram from '@/components/Instagram.vue'
import Footer from '@/components/Footer.vue'
import Presentation from '@/components/Presentation.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import ReviewSection from '@/components/ReviewSection.vue'
import logo from '@/assets/logo/logo-delas.png'
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-gradient-to-b from-rose-100 via-purple-100 to-rose-100 text-gray-800 overflow-hidden">
    <div class="relative z-10">
      <Header />

      <div class="flex justify-center p-4">
        <img :src="logo" alt="Logo" class="h-80" />
      </div>

      <main class="flex-grow px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Portfolio />
          <Presentation />
        </div>

        <!-- Avaliações -->
        <ReviewSection />

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Instagram />
          <ProductGallery />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
