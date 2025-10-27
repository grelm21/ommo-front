<script setup>
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()
import { usePromiseStore } from '@/stores/promiseStore'
const promiseStore = usePromiseStore()

import { onUpdated, ref, watch } from 'vue'

import VkIcon from '@/components/icons/VkIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'

const vkContainer = ref(null)

const promiseOne = ref(null)
const promiseTwo = ref(null)

const nameOne = ref(null)
const nameTwo = ref(null)
const id = ref(contractStore.contract?.id)

watch(
  () => contractStore.contract,
  (newContract) => {
    if (newContract) {
      promiseOne.value = promiseStore.byId(newContract.partners[0]?.promise_id)
      promiseTwo.value = promiseStore.byId(newContract.partners[1]?.promise_id)
      nameOne.value = newContract.partners[0]?.name || contractStore.partnerOne.name
      nameTwo.value = newContract.partners[1]?.name || contractStore.partnerTwo.name
      id.value = newContract.id
    }
  },
)

const openYouTube = () => {
  window.open('https://youtube.com/@ommo_ommo_ommo?si=WaPUf-Z6CVzSkuv', '_blank')
}
const openVk = () => {
  window.open('https://vk.com/club232985627', '_blank')
}
const openTelegram = () => {
  window.open('https://t.me/OMMO_spb', '_blank')
}

// onUpdated(() => {
//   if (window.VK && window.VK.Share) {
//     vkContainer.value.innerHTML = window.VK.Share.button(
//       {
//         url: import.meta.env.VITE_URL + "?contract=" + id.value,
//         title: 'Я подписал контракт любви со своей второй половинкой! А ты?'
//       },
//       {
//         type: 'custom',
//         text: `<div class='flex justify-center handjet-normal text-[20px] text-white underline
//           cursor-pointer'> Поделиться в ВК </div>`,
//       },
//     )
//   }
// })

onUpdated(() => {
  const url = import.meta.env.VITE_URL + '?contract=' + id.value
  const text = 'Я подписал контракт любви со свой второй половинкой! А ты?'
  const shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&comment=${encodeURIComponent(text)}`

  vkContainer.value.innerHTML = `
    <a href="${shareUrl}" target="_blank" rel="noopener noreferrer"
      class="flex justify-center handjet-normal text-[20px] text-white underline cursor-pointer">
      Поделиться в ВК
    </a>`
})
</script>

<template>
  <div class="flex flex-col w-full items-center justify-center">
    <div class="name-inputs">
      <div class="title-placeholder handjet-normal">Ваш договор</div>
      <div>
        <label for="partnerOne" class="input-label caveat-bold">{{ nameOne }}</label>
        <div class="promise-text caveat-extrabold">
          {{ promiseOne?.description || '' }}
        </div>
      </div>
      <div>
        <label for="partnerTwo" class="input-label caveat-bold">{{ nameTwo }}</label>
        <div class="promise-text caveat-extrabold">
          {{ promiseTwo?.description || '' }}
        </div>
      </div>
      <div class="flex text-justify handjet-normal text-[20px] text-white">
        Поздравляем! Вы составили контракт любви. Он вступит в силу 10 ноября, когда выйдет наша новая
        песня. Для полной активации необходимо прослушать нашу песню =).<br />А пока, подпишитесь на наш
        плейлист на стримингах, поделитесь контрактом с друзьями в ВК и скачайте .pdf версию!
      </div>
      <div class="flex gap-[8px] items-center justify-center">
        <div class="subscribe handjet-normal">Подписаться на нас:</div>
        <button
          class="flex items-center justify-end h-[40px] w-[40px] hover-scale"
          type="button"
          @click="openYouTube"
        >
          <YouTubeIcon />
        </button>
        <button
          class="flex items-center justify-end h-[40px] w-[40px] hover-scale"
          type="button"
          @click="openVk"
        >
          <VkIcon />
        </button>
        <button
          class="flex items-center justify-end h-[40px] w-[40px] hover-scale"
          type="button"
          @click="openTelegram"
        >
          <TelegramIcon />
        </button>
      </div>
      <div>
        <div
          class="flex justify-center handjet-normal text-[32px] text-white underline cursor-pointer"
        >
          <div
            ref="vkContainer"
            class="flex justify-center handjet-normal text-[32px] text-white underline cursor-pointer"
          />
        </div>
        <div
          class="flex justify-center handjet-normal text-[20px] text-white underline cursor-pointer"
        >
          Скачать контракт в .pdf
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-placeholder {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px #e5e82f33;
  color: #e5e82f;
  font-size: 32px;
  rotate: -3deg;
}

.name-inputs {
  @apply flex flex-col gap-y-[24px] mt-[0px] w-full;
  padding: 0 40px;
  z-index: 1;
}

.input-label {
  @apply mb-[16px] pb-[2px];
  display: flex;
  justify-content: center;
  color: #d32fe8;
  font-size: 32px;
  text-shadow: 3px 1px #ff00f233;
  text-shadow: 0 0 8px 0 #4e027a80;
}

.promise-text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  width: 100%;
  color: #4de5f6;
  -webkit-text-fill-color: #4de5f6;
  -webkit-text-stroke: 1.2px #0287e6;
  text-shadow: 0 0 8px 0 #0287e659;
  font-size: 24px;
}

.subscribe {
  font-size: 32px;
  color: #ffffff;
}
</style>
