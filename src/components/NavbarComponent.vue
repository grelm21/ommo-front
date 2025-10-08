<script setup>
import logo from '@/assets/logo.jpeg'
import PlaylistComponent from './PlaylistComponent.vue'
</script>

<template>
  <div
    class="grid grid-cols-12 font-bold h-[72px] bg-white items-center px-5 sticky top-0 shadow-md z-50"
  >
    <div class="inline-flex flex-0 items-center gap-4 col-span-11">
      <img :src="logo" class="h-[50px] w-[50px]" />
      <span>Премьера песни "Контракт любви" 10.11.2025</span>
    </div>
    <button class="flex items-center justify-end" type="button" data-dropdown-toggle="dropdown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-music-note-beamed"
        viewBox="0 0 16 16"
      >
        <path
          d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"
        />
        <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
      </svg>
    </button>
    <div
      id="dropdown"
      class="z-10 hidden bg-white divide-y divide-gray-100 shadow-sm dark:bg-gray-700"
    >
      <PlaylistComponent />
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
