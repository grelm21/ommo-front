<script setup>
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
import heart from '@/assets/heart-button.svg'
import triangle from '@/assets/triangle.svg'
import { onMounted, onUnmounted, ref } from 'vue'
import TimerTitle from '@/components/icons/TimerTitle.vue'


const targetDate = new Date('2025-11-11T00:00:00').getTime()
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer = null

const updateTimer = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    // Если дата прошла
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    clearInterval(timer)
    return
  }

  // Расчет временных единиц
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateTimer() // Первый запуск сразу
  timer = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
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

    <div class="timer-container" data-text="Премьера через:">
      <TimerTitle class="w-[348px]" />
      <span class="timer-text">
        {{ days }} д. {{ hours }} ч. {{ minutes }} м. {{ seconds }} с.
      </span>
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

.timer-text {
  @apply rotate-[-3deg] text-[40px] z-50 pl-8;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
  background-image:
    url('@/assets/noise.svg'),
    linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(201, 223, 246, 1));
  background-repeat: repeat, no-repeat;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 12px rgba(7, 98, 209, 0.5));
  z-index: 50; /* Повышаем z-index для основного текста */
  white-space: nowrap;
}


.timer-container {
  @apply absolute flex flex-col m-0 top-[7%] left-[53%] leading-[100%];
}
</style>
