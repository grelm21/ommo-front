<script setup>
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
import heart from '@/assets/heart-button.svg'
import triangle from '@/assets/triangle.svg'
import audio from '@/assets/audio.svg'
import audioVectors from '@/assets/audio-vectors.svg'
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

        <h1 class="premiere-text russo-one-regular">Скоро премьера песни</h1>

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
      <span class="timer-text russo-one-regular">
        {{ days }} д. {{ hours }} ч. {{ minutes }} м. {{ seconds }} с.
      </span>
      <div class="relative inline-block">
        <!-- Контейнер для audio с отступами -->
        <div class="pt-14 pl-8">
          <img :src="audio" class="w-[280px] relative z-10" />
        </div>

        <!-- Audio vectors позиционируется относительно того же контейнера -->
        <img :src="audioVectors" class="audio-vectors" />
      </div>
    </div>

    <!-- Дата -->
    <div class="flex justify-center w-full">
      <img src="@/assets/song_date.svg" class="w-[75%] relative z-10" />
      <div class="w-[15%] absolute flex justify-center gap-36">
        <img src="@/assets/left-note.svg" class="" />
        <img src="@/assets/right-note.svg" class="" />
      </div>
    </div>

    <!-- Кнопка -->
    <div class="grid gap-y-5 justify-end pr-48 mt-8">
      <button class="contract-button russo-one-regular">
        <span class="contract-button-inner">
          <img :src="heart" class="w-[32px]" />
          Подписать контракт любви
        </span>
      </button>
      <span class="roboto-mono-regular text-white text-xl text-end">
        Заполните контракт на страхование любви,<br />
        поделитесь им в соцсетях
      </span>
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
  background: url('@/assets/bg-heart.svg')  center/contain no-repeat;
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
  @apply block mx-auto w-[520px];
}

/* Текст "Скоро премьера песни" */

.premiere-text {
  @apply inline-block absolute text-white text-[28px] font-normal leading-[100%] m-0 z-10 whitespace-nowrap;
  top: 23%;
  left: 50%;
  transform: translate(-48%, -50%) rotate(-3deg);
  filter: url('#textDistortion') url('#textStroke') drop-shadow(0 0 12px rgba(50, 63, 190, 0.7));
  text-shadow:
    -3px -3px 0 #202c97,
    3px -3px 0 #202c97,
    -3px 3px 0 #202c97,
    3px 3px 0 #202c97;
}

.main-title-container {
  @apply absolute z-10 whitespace-nowrap;
  top: 35%;
  left: 50%;
  transform: translate(-48%, -50%) rotate(-3deg);
  letter-spacing: 4px;
}

.main-title {
  @apply relative block text-[64px];
  color: #00eeff;
  filter: url('#textDistortion');
  text-shadow:
    -2px -2px 0 #525ed0,
    2px -2px 0 #525ed0,
    -2px 2px 0 #525ed0,
    2px 2px 0 #525ed0,
    0 0 36px rgba(82, 94, 208, 0.9);
}

.main-title-shadow {
  @apply absolute block text-[64px] w-full;
  top: 0.7rem;
  left: 0.5rem;
  color: rgba(255, 0, 242, 0.3);
  z-index: -1;
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
  @apply rotate-[-3deg] text-[40px] z-50 pl-8 m-0 leading-[100%] whitespace-nowrap;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  background-image:
    url('@/assets/noise.svg'),
    linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(201, 223, 246, 1));
  background-repeat: repeat, no-repeat;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 12px rgba(7, 98, 209, 0.5));
}

.timer-container {
  @apply absolute flex flex-col m-0 top-[7%] left-[53%] leading-[100%];
}

.audio-vectors {
  @apply absolute w-[750px] top-[60%] left-[37%] transform -translate-x-1/2 -translate-y-1/2 z-0;
  transform: translate(-50%, -50%) scale(1.6);
}
</style>
