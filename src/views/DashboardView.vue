<script setup>
import FormComponent from '../components/FormComponent.vue'
import heart from '@/assets/heart-button.svg'
import triangle from '@/assets/triangle.svg'
import audio from '@/assets/audio.svg'
import audioVectors from '@/assets/audio-vectors.svg'
import { onMounted, onUnmounted, ref } from 'vue'
import TimerTitle from '@/components/icons/TimerTitle.vue'
import NoteIcon from '@/components/icons/NoteIcon.vue'
import PlaylistComponent from '@/components/PlaylistComponent.vue'
import HeartButtonIcon from '@/components/icons/HeartButtonIcon.vue'

const targetDate = new Date('2025-11-28T00:00:00').getTime()
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer = null
// https://music.yandex.ru/users/PortGrad/playlists/1002?ref_id=6C255153-B5A6-468D-BC87-0835CAB0B8F4&utm_medium=copy_link
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

const namesFormRef = ref(null)

const scrollToNamesForm = () => {
  if (namesFormRef.value) {
    const element = namesFormRef.value

    // Добавляем класс для подсветки
    element.classList.add('highlight-form')

    // Определяем коэффициент для разных устройств
    const isMobile = window.innerWidth <= 640
    const heightCoefficient = isMobile ? 2 : 1.5

    // Точное центрирование
    const elementRect = element.getBoundingClientRect()
    const absoluteElementTop = elementRect.top + window.pageYOffset
    const middle =
      absoluteElementTop - window.innerHeight / 2 + elementRect.height / heightCoefficient

    window.scrollTo({
      top: middle,
      behavior: 'smooth',
    })

    // Убираем подсветку через 2 секунды
    setTimeout(() => {
      element.classList.remove('highlight-form')
    }, 2000)
  }
}

const openPreSave = () => {
  window.open(
    'https://band.link/MVTNL',
    '_blank',
  )
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
          <span>
            <span class="ommo handjet-extra-bold"> ОММО</span>
            <span class="ommo-shadow handjet-extra-bold"> ОММО</span>
          </span>
          <span>
            <span class="main-title handjet-extra-bold">Страховка любви </span>
            <span class="main-title-shadow handjet-extra-bold">Страховка любви </span>
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
        <div class="xl:pt-14 pt-8 pl-8">
          <div class="w-[280px]">
            <img :src="audio" class="relative" />

            <button
              class="absolute left-44 top-36 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out hover:scale-125 z-50"
              type="button"
              @click="openPreSave"
            >
              <NoteIcon class="w-[70px]" />
            </button>
          </div>
          <img :src="audioVectors" class="audio-vectors" />
        </div>
      </div>
    </div>
    <!-- Дата -->
    <div class="date-container">
      <img src="@/assets/premier-date.svg" class="w-[72%] relative z-10" />
      <div class="w-[15%] absolute flex justify-center xl:gap-36 gap-8">
        <img src="@/assets/left-note.svg" class="" />
        <img src="@/assets/right-note.svg" class="" />
      </div>
    </div>

    <!-- Кнопка -->
    <div class="grid gap-y-5 xl:justify-end justify-center md:pr-24 sm:pr-12 xl:pr-48 mt-10 z-50">
      <button class="contract-button group russo-one-regular" @click="scrollToNamesForm">
        <span class="contract-button-inner">
          <HeartButtonIcon class="little-heart group-hover:text-red-600"/>
          Подписать контракт любви
        </span>
      </button>
      <span class="roboto-mono-regular under-button-text">
        Заполните контракт на страхование любви,<br />
        поделитесь им в соцсетях
      </span>
    </div>
    <div class="arrow">
      <img src="@/assets/arrow-string.svg" class="" />
    </div>
  </div>

  <div ref="namesFormRef" class="flex w-full justify-center xl:mt-10 mt-0 form-container relative">
    <FormComponent />
  </div>
</template>

<style scoped>
/* ===============================
   ДЕФОЛТНЫЕ СТИЛИ (без @media)
   Порядок сохранён: container-dash -> text-effects -> content -> triangle ->
   premiere-text -> main-title -> date -> arrow -> filter-svg -> timer ->
   timer-text -> audio-vectors -> contract/button -> highlight-form
   =============================== */

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
  bottom: -15%;
  /* background-image: url('@/assets/grid-tile.svg'); */
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
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  aspect-ratio: 1 / 1;
  background: url('@/assets/bg-heart.svg') center/contain no-repeat;
  opacity: 0.8;
  z-index: -1;
  pointer-events: none;
}

/* Контейнер с треугольником и текстом */
.text-effects-container {
  @apply relative pr-[600px];
}

/* Контентный блок */
.content-wrapper {
  @apply relative;
}

/* Треугольник */
.triangle-img {
  @apply block mx-auto w-[520px];
}

/* Текст "Скоро премьера песни" */
.premiere-text {
  @apply inline-block absolute text-white text-[28px] font-normal leading-[100%] mx-auto z-10 whitespace-nowrap;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-3deg);
  transform-origin: center center;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  filter: url('#textDistortion') url('#textStroke') drop-shadow(0 0 12px rgba(50, 63, 190, 0.7));
  text-shadow:
    -3px -3px 0 #202c97,
    3px -3px 0 #202c97,
    -3px 3px 0 #202c97,
    3px 3px 0 #202c97;
}

.is-safari .premiere-text {
  transform: translate(-60%, -50%) rotate(-3deg);
}

@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .premiere-text {
      transform: translate(-60%, -50%) rotate(-3deg);
    }
  }
}

/* Main title */
.main-title-container {
  @apply absolute z-10 whitespace-nowrap text-center grid gap-4;
  top: 40%;
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

.ommo {
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
  top: 3.5rem;
  left: 0.5rem;
  color: rgba(255, 0, 242, 0.3);
  z-index: -1;
}

.ommo-shadow {
  @apply absolute block text-[64px] w-full;
  top: 0.5rem;
  left: 0.5rem;
  color: rgba(255, 0, 242, 0.3);
  z-index: -1;
}

/* Дата */
.date-container {
  @apply flex justify-center w-full;
}

/* Стрелка */
.arrow {
  @apply absolute;
  bottom: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* SVG-фильтры (скрыт) */
.filter-svg {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}

/* Таймер-контейнер */
.timer-container {
  @apply absolute grid m-0 top-[7%] left-[53%] leading-[100%];
}

/* Текст таймера */
.timer-text {
  @apply -rotate-3 text-[40px] z-50 pl-8 m-0 leading-[100%] whitespace-nowrap;
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

/* Аудио вектор(ы) */
.audio-vectors {
  @apply absolute w-[750px] top-[60%] left-[37%] transform -translate-x-1/2 -translate-y-1/2 z-0;
  transform: translate(-50%, -50%) scale(1.6);
}

/* Кнопка контракта - внутренний контент */
.contract-button-inner {
  @apply flex justify-center items-center xl:gap-3 gap-1.5 py-4 px-14;
}

/* Маленькое сердечко в кнопке */
.little-heart {
  @apply text-white mt-4 transition-colors duration-300;
}

/* Текст под кнопкой */
.under-button-text {
  @apply text-xl text-white text-end;
}

/* Highlight form (пульсация) */
.highlight-form {
  position: relative;
  width: 100%;
  height: 100%;
}

.highlight-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(7, 98, 209, 0.3) 0%,
    rgba(176, 111, 255, 0.1) 40%,
    transparent 70%
  );
  opacity: 0;
  z-index: -1;
  border-radius: 10px;
  animation: gradient-pulse 4s ease-in-out;
  transform: translateZ(0);
  pointer-events: none;
}


/* Усиленная подсветка для 400–420px */


@keyframes gradient-pulse {
  0% {
    opacity: 0;
    transform: translateZ(0) scale(0.95);
  }
  25% {
    opacity: 0.8;
    transform: translateZ(0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateZ(0) scale(1.05);
  }
  75% {
    opacity: 0.8;
    transform: translateZ(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(0) scale(0.95);
  }
}


@keyframes form-glow {
  0%, 100% {
    opacity: 0.6;
    filter: blur(20px) brightness(0.5);
  }
  50% {
    opacity: 1;
    filter: blur(26px) brightness(0.9);
  }
}

@media (max-width: 1280px) {
  .timer-container {
    top: 10%;
    left: 50%;
  }
}

@media (max-width: 1024px) {
  .text-effects-container {
    @apply pr-[300px];
  }

  .triangle-img {
    @apply w-[300px];
  }

  /* premiere-text */
  .premiere-text {
    @apply text-[22px];
    top: 20%;
    transform: translate(-50%, -50%) rotate(-3deg);
  }

  .main-title,
  .main-title-shadow {
    @apply text-[36px];
  }

  .ommo,
  .ommo-shadow {
    @apply text-[36px];
  }

  .main-title-container {
    top: 40%;
  }

  .date-container {
    @apply pt-36;
  }

  .timer-container {
    top: 25%;
    left: 50%;
  }
}

@media (max-width: 768px) {
  /* text-effects-container */
  .text-effects-container {
    @apply pr-0;
  }

  /* premiere-text */
  .premiere-text {
    @apply text-[18px];
    top: 15%;
    transform: translate(-50%, -50%) rotate(-3deg);
  }

  .main-title-container {
    top: 40%;
  }

  .timer-container {
    top: 25%;
    left: 50%;
    transform: translateX(-50%) scale(0.85);
  }

  .timer-text {
    @apply text-[28px] pl-12;
  }

  .audio-vectors {
    @apply left-[47%];
  }

  .contract-button-inner {
    @apply py-5 px-2;
  }

  .little-heart {
    @apply w-[28px];
  }

  .under-button-text {
    @apply text-sm;
  }

  .arrow {
    display: none;
  }
}

@media (max-width: 640px) {
  .container-dash::after {
    top: -5%;
    width: 95%;
  }

  .text-effects-container {
    @apply pr-0;
  }

  .triangle-img {
    @apply w-[300px];
  }

  .premiere-text {
    @apply text-[18px];
    top: 20%;
    transform: translate(-40%, -50%) rotate(-3deg);
  }

  .main-title, .ommo,
  .main-title-shadow, .ommo-shadow {
    @apply text-[36px];
  }

  .main-title-container {
    top: 42%;
  }
  .ommo-shadow {
    top: 0.3rem;
    left: 0.3rem;
  }
  .main-title-shadow {
    top: 2.6rem;
    left: 0.3rem;
  }
  .main-title-container {
    @apply grid gap-1;
  }

  .date-container {
    @apply pt-72;
  }

  .timer-container {
    top: 28%;
    left: 50%;
    transform: translateX(-50%) scale(0.7);
  }

  .timer-text {
    @apply text-[28px] pl-12;
  }

  .audio-vectors {
    @apply left-[47%];
  }

  .contract-button-inner {
    @apply py-5 px-2;
  }

  .little-heart {
    @apply w-[28px];
  }

  .under-button-text {
    @apply text-sm hidden;
  }

  .arrow {
    display: none;
  }
  .form-container::before {
    content: '';
    position: absolute;
    top: -27%;
    left: 0;
    right: 0;
    bottom: -45%;
    background: radial-gradient(
      circle at center,
      rgba(7, 98, 209, 0.2) 10%,
      rgba(176, 111, 255, 0.6) 40%,
      transparent 70%
    );
    z-index: -1;
    pointer-events: none;
    filter: blur(25px);
    opacity: 0.8;
    animation: form-glow 5s ease-in-out infinite;
  }
}

@media (max-width: 480px) {
  /* main-title sizes */
  .main-title, .ommo,
  .main-title-shadow, .ommo-shadow {
    @apply text-[32px];
  }
  .ommo-shadow {
    top: 0.3rem;
    left: 0.3rem;
  }
  .main-title-shadow {
    top: 2.6rem;
    left: 0.3rem;
  }
  .main-title-container {
    @apply grid gap-1;
  }
  .form-container::before {
    content: '';
    position: absolute;
    top: -27%;
    left: 0;
    right: 0;
    bottom: -45%;
    background: radial-gradient(
      circle at center,
      rgba(7, 98, 209, 0.2) 10%,
      rgba(176, 111, 255, 0.6) 40%,
      transparent 70%
    );
    z-index: -1;
    pointer-events: none;
    filter: blur(25px);
    opacity: 0.8;
    animation: form-glow 5s ease-in-out infinite;
  }
}

@media (max-width: 400px) {
  .container-dash::after {
    top: 0;
    width: 100%;
  }
  .contract-button-inner {
    @apply py-2;
  }
  .ommo-shadow {
    top: 0.3rem;
    left: 0.3rem;
  }
  .main-title-shadow {
    top: 2.6rem;
    left: 0.3rem;
  }
  .main-title-container {
    @apply grid gap-1;
  }
  .form-container::before {
    content: '';
    position: absolute;
    top: -27%;
    left: 0;
    right: 0;
    bottom: -45%;
    background: radial-gradient(
      circle at center,
      rgba(7, 98, 209, 0.2) 10%,
      rgba(176, 111, 255, 0.6) 40%,
      transparent 70%
    );
    z-index: -1;
    pointer-events: none;
    filter: blur(25px);
    opacity: 0.8;
    animation: form-glow 5s ease-in-out infinite;
  }
}

@media  (min-width: 400px) and (max-width: 420px){
  .premiere-text {
    left: 60%;
  }
  .contract-button-inner {
    @apply py-2;
  }
}
@media (max-width: 430px){
  .premiere-text {
    left: 45%;
  }
  .contract-button-inner {
    @apply py-2;
  }
}
@media (max-width: 390px){
  .premiere-text {
    left: 45%;
  }
  .contract-button-inner {
    @apply py-2;
  }
}
</style>
