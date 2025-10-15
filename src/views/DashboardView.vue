<script setup>
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
import heart from '@/assets/heart-button.svg'
import triangle from '@/assets/triangle.svg'
</script>

<template>
  <div class="container-dash">
    <div class="text-effects-container">
      <!-- SVG фильтры -->
      <svg class="filter-svg">
        <defs>
          <filter id="textDistortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.15 0.2"
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

          <filter id="textStroke">
            <feMorphology in="SourceAlpha" result="MORPH" operator="dilate" radius="1" />
            <feFlood flood-color="rgba(32, 44, 151, 1)" result="FLOOD" />
            <feComposite in="FLOOD" in2="MORPH" operator="in" result="STROKE" />
            <feMerge>
              <feMergeNode in="STROKE" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <!-- Контейнер с треугольником и текстом -->
      <div class="content-wrapper">
        <img :src="triangle" class="triangle-img" />

        <!-- Текст "Скоро премьера песни" -->
        <h1 class="premiere-text">Скоро премьера песни</h1>

        <!-- Основной заголовок -->
        <div class="main-title-container">
      <span class="main-title handjet-extra-bold">
        ОММО-Страховка любви
      </span>
          <span class="main-title-shadow handjet-extra-bold">
        ОММО-Страховка любви
      </span>
        </div>
      </div>
    </div>

    <div>

    </div>

    <!-- Дата -->
    <div class="flex justify-center w-full">
      <img src="@/assets/song_date.svg" class="w-[75%]" />
    </div>

    <!-- Кнопка -->
    <div class="flex justify-end pr-96 bottom-0">
      <button class="contract-button russo-one-regular">
        <span class="contract-button-inner">
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
/* Контейнер блока */
.container-dash {
  @apply flex flex-col text-2xl w-screen justify-center relative overflow-visible z-0;
}

/* Сетка — на весь фон контейнера */
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
  background-position: center;
  z-index: -2;
  pointer-events: none;
}

/* Сердце — чуть ниже, поверх сетки */
.container-dash::after {
  content: '';
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  aspect-ratio: 1 / 1;
  background: url('@/assets/bg-heart.svg') center/contain no-repeat;
  opacity: 0.8;
  z-index: -1;
  pointer-events: none;
}


/* Треугольник сверху */
.text-effects-container {
  @apply relative pr-[600px];
}

.content-wrapper {
  @apply relative min-h-96;
}

.triangle-img {
  width: 520px;
  margin: 0 auto;
  display: block;
}

/* Текст "Скоро премьера песни" */
.premiere-text {
  font-family: 'Russo One', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 100%;
  color: #fff;
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 23%; /* Регулируйте положение */
  left: 50%;
  transform: translate(-48%, -50%) rotate(-3deg);
  filter: url('#textDistortion') url('#textStroke') drop-shadow(0 0 12px rgba(50, 63, 190, 0.7));
  text-shadow:
    -3px -3px 0 #202c97,
    3px -3px 0 #202c97,
    -3px 3px 0 #202c97,
    3px 3px 0 #202c97;
  z-index: 10;
  white-space: nowrap; /* Запрет переноса строк */
}

/* Контейнер для основного заголовка */
.main-title-container {
  position: absolute;
  top: 35%; /* Регулируйте положение ниже первого текста */
  left: 50%;
  transform: translate(-48%, -50%) rotate(-3deg);
  z-index: 10;
  white-space: nowrap; /* Запрет переноса строк */
  letter-spacing: 4px;
}

/* Главный заголовок */
.main-title {
  @apply text-[64px];
  color: #00eeff;
  filter: url('#textDistortion');
  text-shadow:
    -2px -2px 0 #525ed0,
    2px -2px 0 #525ed0,
    -2px 2px 0 #525ed0,
    2px 2px 0 #525ed0,
    0 0 36px rgba(82, 94, 208, 0.9);
  position: relative;
  display: block;
}

/* Нижняя тень */
.main-title-shadow {
  @apply text-[64px];
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  color: #ff00f233;
  opacity: 0.2;
  z-index: -1;
  display: block;
  width: 100%;
}

/* Кнопка подписания контракта */
.contract-button {
  @apply font-bold text-white text-[24px] bg-transparent transition-transform hover:scale-105;
}

.contract-button-inner {
  @apply flex justify-center items-center gap-3 py-7 px-14;
}

/* Липкий контейнер под формой */
.stick {
  @apply sticky top-[65px];
}

/* SVG с фильтрами скрыт визуально, но остаётся в DOM */
.filter-svg {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}
</style>
