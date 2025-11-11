<script setup>
import logo from '@/assets/logo-no-bg.svg'
import PlaylistComponent from './PlaylistComponent.vue'
import VkIcon from '@/components/icons/VkIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import NoteIcon from '@/components/icons/NoteIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'

const openYouTube = () => {
  window.open('https://youtube.com/@ommo_ommo_ommo?si=WaPUf-Z6CVzSkuv', '_blank');
};
const openVk = () => {
  window.open('https://vk.com/club232985627', '_blank');
};
const openTelegram = () => {
  window.open('https://t.me/OMMO_spb', '_blank');
};

const scrollToGallery = () => {
  const gallery = document.getElementById('gallery-section')
  if (gallery) {
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

</script>

<template>
  <div
    class="flex justify-between font-bold h-[80px] sm:h-[100px] items-center px-4 sm:px-16 lg:px-64 sticky top-0 z-50">
    <div class="inline-flex flex-0 items-center gap-4 col-span-11">
      <img :src="logo" class="h-[50px] w-[70px] sm:h-[80px] sm:w-[100px] cursor-pointer" @click="scrollToGallery" />
    </div>
    <div class="flex gap-4 sm:gap-8">
      <button class="flex items-center justify-end h-[40px] w-[40px] hover-scale" type="button" @click="openYouTube">
        <YouTubeIcon />
      </button>
      <button class="flex items-center justify-end h-[40px] w-[40px] hover-scale" type="button" @click="openVk">
        <VkIcon />
      </button>
      <button class="flex items-center justify-end h-[40px] w-[40px] hover-scale" type="button" @click="openTelegram">
        <TelegramIcon />
      </button>
    </div>
  </div>

  <!-- <div -->
  <!--   id="dropdown" -->
  <!--   class="z-10 hidden bg-white divide-y divide-gray-100 shadow-sm dark:bg-gray-700" -->
  <!-- > -->
  <!--   <PlaylistComponent /> -->
  <!-- </div> -->
</template>

<style></style>
