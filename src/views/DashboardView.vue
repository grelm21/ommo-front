<script setup>
import { onMounted } from 'vue'
import NamesForm from '../components/NamesForm.vue'
import OptionsComponent from '../components/OptionsComponent.vue'

</script>

<template>
  <div class="container-dash">
    <div class="flex items-center justify-center font-bold">ОММО договор №8929 от 10.11.2025</div>
    <div class="text-sm italic text-center text-gray-400">
      *заполните договор на страхование любви от ОММО, поделитесь им в соцсетях, а в дату выхода
      песни подтвердите договор и послушайте новый змечательный трек от нашей группы
    </div>
    <div class="flex justify-center w-full mt-4 bg-white">
      <img src="@/assets/band.jpeg" class="w-[25%]" />
    </div>
    <div class="stick flex w-full justify-center mt-4 bg-white">
      <NamesForm />
    </div>

    <OptionsComponent />

  </div>
</template>

<style scoped>
.container-dash {
  @apply flex flex-col text-2xl w-screen justify-center mt-4;
}

.stick {
  @apply sticky top-[65px];
}

</style>
