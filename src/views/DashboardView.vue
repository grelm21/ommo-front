<script setup>
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
</script>

<template>
  <div class="container-dash">
    <div class="bg-heart"></div>
    <div class="flex items-center justify-center font-bold">ОММО договор №8929 от 10.11.2025</div>
    <div class="text-sm italic text-center text-gray-400">
      *заполните договор на страхование любви от ОММО, поделитесь им в соцсетях, а в дату выхода
      песни подтвердите договор и послушайте новый змечательный трек от нашей группы
    </div>
    <div class="flex justify-center w-full">
      <img src="@/assets/song_date.svg" class="w-[50%] pt-32" />
    </div>
  </div>

  <div class="stick flex w-full justify-center mt-4">
    <NamesForm />
  </div>

  <OptionsComponent />
</template>

<style scoped>
.container-dash {
  @apply flex flex-col text-2xl w-screen justify-center py-[200px] relative overflow-visible;
}

.container-dash::before {
  content: "";
  position: absolute;
  top: -15%;
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
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


</style>
