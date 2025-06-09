<script setup>
import insta1 from '@/assets/instagram/insta1.jpg'
import insta2 from '@/assets/instagram/insta2.jpg'
import insta3 from '@/assets/instagram/insta3.jpg'
import insta4 from '@/assets/instagram/insta4.jpg'
import insta5 from '@/assets/instagram/insta5.jpg'
import insta6 from '@/assets/instagram/insta6.jpg'

const images = [insta1, insta2, insta3, insta4, insta5, insta6]
</script>

<template>
  <section class="p-6 bg-gradient-to-b from-rose-100 via-purple-100 to-rose-100 rounded-xl">
    <h2 class="text-xl font-bold mb-4 text-purple-500 text-center">
      <a href="https://www.instagram.com" target="_blank" class="hover:underline">Instagram</a>
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition transform hover:scale-105"
      >
        <div class="w-28 h-28 rounded-full overflow-hidden mb-2 shadow-md border-4 border-white">
          <img :src="img" alt="Instagram post" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
