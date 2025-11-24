<script setup>
import SqIcon from '@/components/icons/SqIcon.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const isMobile = window.innerWidth <= 480;
const excludedForMobile = ['4.png', '3T1A8455.png', '3T1A8449.png', '3T1A8448.png', '3T1A8424.png', '3T1A8599.png' ]
const galleryImages = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
  })
)
  .filter(([path]) => {
    if (isMobile) {
      return !excludedForMobile.some(name => path.includes(name));
    }
    return true;
  })
  .map(([_, path]) => new URL(path, import.meta.url).href);
</script>
<template>
  <div id="custom-controls-gallery" class="relative w-full pt-24" data-carousel="slide">
<!--    <OrangeSqIcon class="orange-sq"/>-->
    <div class="relative overflow-hidden rounded-lg h-[78vh] md:h-[88vh]">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        class="hidden duration-700 ease-in-out h-[70vh] md:h-[80vh]"
        :data-carousel-item="index === 0 ? 'active' : ''"
      >
        <img :src="image" class="foto-item" alt="Gallery image" />
      </div>
    </div>
    <SqIcon class="absolute top-1/2 left-1/2 max-h-full h-full w-auto transform -translate-x-1/2 -translate-y-1/2"/>

    <div class="flex justify-center items-start">
      <button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="arrows text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180">
            <path d="M28 14.5001L10.691 1.51807V8.89995L0 8.89995V20.0999H10.691V27.4817L28 14.5001Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="arrows text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 14.5001L10.691 1.51807V8.89995L0 8.89995V20.0999H10.691V27.4817L28 14.5001Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.foto-item {
  @apply absolute top-1/2 left-1/2 max-h-full h-full w-auto transform -translate-x-1/2 -translate-y-1/2 object-contain;
  image-orientation: from-image;
}
.arrows {
  @apply relative inline-flex w-7 h-7; /* w-7/h-7 — под размер svg 28px */
}

.arrows::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-full;
  background: url('@/assets/noise.svg');
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 5;
}
.blue-sq, .orange-sq {
  @apply absolute max-h-full h-full w-auto opacity-70;
}
.blue-sq {
  @apply rotate-1;
  top: 1%;
  left: 31%;
}
.orange-sq {
  @apply -rotate-2;
  top: -2%;
  left: 13%;
}

@media  (min-width: 400px) and (max-width: 420px){
  .blue-sq, .orange-sq {
    @apply rotate-0 -rotate-0 h-5/6;
    top: 0;
    left: -20%;
  }
}
@media (max-width: 430px) and (max-width: 390px) {
  .blue-sq, .orange-sq {
    @apply rotate-0 -rotate-0 h-[90%];
    top: 5%;
    left: -20%;
  }
}
@media (max-width: 360px){
  .blue-sq, .orange-sq {
    @apply rotate-0 -rotate-0 h-5/6;
    top: 12%;
    left: -20%;
  }
}

@media (max-width: 375px){
  .blue-sq, .orange-sq {
    @apply rotate-0 -rotate-0 h-[95%];
    top: 5%;
    left: -20%;
  }
}

</style>
