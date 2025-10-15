<script setup>
import { onMounted } from 'vue'
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
import heart from '@/assets/heart-button.svg'
import triangle from '@/assets/triangle.svg'
</script>

<template>
  <div class="container-dash">
    <div class="bg-heart"></div>
    <img :src="triangle" class="w-[520px]" />

    <div class="text-effects-container">
      <!-- Скрытый SVG с фильтрами -->
      <svg class="filter-svg">
        <defs>
          <!-- Фильтр для волнистого контура как в оригинале -->
          <filter id="textDistortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.04"
              numOctaves="2"
              seed="15"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>

          <!-- Фильтр для обводки -->
          <filter id="textStroke">
            <feMorphology in="SourceAlpha" result="MORPH" operator="dilate" radius="2"/>
            <feFlood flood-color="rgba(32, 44, 151, 1)" result="FLOOD"/>
            <feComposite in="FLOOD" in2="MORPH" operator="in" result="STROKE"/>
            <feMerge>
              <feMergeNode in="STROKE"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <h1 class="premiere-text" data-text="Скоро премьера песни">
        Скоро премьера песни
      </h1>
    </div>

    <div class="flex justify-center w-full">
      <img src="@/assets/song_date.svg" class="w-[75%]" />
    </div>
    <div class="flex justify-end pr-96 bottom-0">
      <button class="contract-button font-bold text-white text-[24px] russo-one-regular">
        <span class="flex justify-center items-center gap-3 py-7 px-14">
          <img :src="heart" class="w-[32px]" />
          Подписать контракт любви
        </span>
      </button>
    </div>
  </div>

  <div class="stick flex w-full justify-center mt-4">
    <NamesForm />
  </div>

  <OptionsComponent />
</template>

<style scoped>
.container-dash {
  @apply flex flex-col text-2xl w-screen justify-center relative overflow-visible;
}

.container-dash::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -5%;
  right: -5%;
  bottom: -5%;
  background-image: url('@/assets/grid-tile.svg');
  background-size: 80px 80px;
  background-repeat: repeat;
  z-index: -2;
  pointer-events: none;
}

.stick {
  @apply sticky top-[65px];
}

.bg-heart {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 74%;
  height: auto;
  aspect-ratio: 1 / 1;
  background-image: url('@/assets/bg-heart.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  z-index: -1;
  opacity: 0.8;
}
.text-effects-container {
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 0 12px rgba(50, 63, 190, 0.7));
}

.premiere-text {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);

  /* Волнистый контур через SVG фильтр */
  filter: url('#textDistortion') url('#textStroke');

  display: inline-block;
  margin: 0;
  padding: 8px 4px;
  position: relative;
}

</style>
