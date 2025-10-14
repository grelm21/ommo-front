<script setup>
import { onMounted } from 'vue'
import { usePromiseStore } from '@/stores/promiseStore'

const promiseStore = usePromiseStore()

onMounted(async () => {
  await promiseStore.fetchItems()
})
</script>

<template>
  <div>
    <iframe
      frameborder="0"
      allow="clipboard-write"
      style="border: none; width: 614px; height: 556px"
      width="614"
      height="556"
      src="https://music.yandex.ru/iframe/playlist/PortGrad/1002"
      >Слушайте
      <a
        href="https://music.yandex.ru/playlists/9cac4357-201e-6ad0-aeb3-569a43c622e2?utm_source=web&utm_medium=copy_link"
        >Pre ОММО</a
      >
      — <a href="https://music.yandex.ru/users/PortGrad">PortГраД</a> на Яндекс Музыке
    </iframe>
  </div>
</template>

<style scoped></style>
