<template>
  <div class="w-full overflow-auto">
    <v-pdf
      ref="pdf"
      :options="pdfOptions"
      filename="контракт_любви_оммо.pdf"
      class="w-[210mm] h-[296mm] relative bg-white mx-auto"
    >
      <div class="contract-bg flex flex-col py-2">
        <p class="playfair-extrabold text-[38px] text-center">Контракт на страхование любви</p>
        <p class="flex w-1/2 mx-auto playfair-normal text-[20px] text-center mt-2">
          (Официальный договор о превентивной защите от эмоциональных рисков)
        </p>
        <p class="flex w-fit mx-auto playfair-bold mt-2 text-[20px]">ПРЕАМБУЛА:</p>
        <p class="flex w-full px-[40px] playfair-normal text-[20px] text-center mt-[1px] text-wrap">
          Стороны,руководствуясь парадоксальным желанием обезопасить себя от хаоса чувств, заключили
          настоящий договор о нижеследующем. Настоящим подтверждается,что любовь, хоть и является
          формой высшего безумия, может быть подвержена разумному регулированию.
        </p>
        <p class="flex w-fit mx-auto playfair-bold mt-2 text-[20px]">ВЗАИМНЫЕ ОБЯЗАТЕЛЬСТВА</p>
        <p class="flex w-full px-[40px] playfair-normal text-[20px] text-center mt-[1px] text-wrap">
          Во исполнение целей настоящего договора стороны принимают на себя следующие добровольные
          обязательства:
        </p>

        <!-- #данные -->
        <Transition>
          <div
            class="flex flex-grow flex-col items-center justify-center"
            v-show="!contractStore.isLoading"
          >
            <div class="flex w-fit mx-auto playfair-bold text-[22px]">
              {{ nameOne.toUpperCase() }}
            </div>
            <p
              class="flex w-fit px-[40px] playfair-italic text-[20px] text-center mt-[1px] text-wrap"
            >
              Обязуюсь {{ promiseOne || '' }}
            </p>

            <div class="flex w-fit mx-auto playfair-bold text-[22px] mt-[30px]">
              {{ nameTwo.toUpperCase() }}
            </div>
            <p
              class="flex w-fit px-[40px] playfair-italic text-[20px] text-center mt-[1px] text-wrap"
            >
              Обязуюсь {{ promiseTwo || '' }}
            </p>
          </div>
        </Transition>
        <Transition>
          <div
            ref="placeholder"
            class="flex flex-grow flex-col items-center justify-center"
            v-if="contractStore.isLoading"
          >
            <div role="status" class="space-y-3 animate-pulse w-fit">
              <div class="flex items-center w-full justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-1/2"></div>
              </div>
              <div class="flex items-center justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-24"></div>
              </div>
              <div class="flex items-center justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-80"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-full"></div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>

            <div role="status" class="space-y-3 animate-pulse w-fit mt-[30px]">
              <div class="flex items-center w-full justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-1/2"></div>
              </div>
              <div class="flex items-center justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-24"></div>
              </div>
              <div class="flex items-center justify-center">
                <div class="h-[20px] bg-[#9D9D9D] rounded-full w-full"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-80"></div>
                <div class="h-[20px] ms-2 bg-[#9D9D9D] rounded-full w-full"></div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </Transition>

        <p class="flex w-fit mx-auto playfair-bold mt-2 text-[20px]">ВСТУПЛЕНИЕ В СИЛУ</p>
        <p class="flex w-full px-[40px] playfair-normal text-[20px] text-center mt-[1px] text-wrap">
          Настоящий договор вступает в силу 28 ноября, после того как стороны прослушают песню
          "Страховка любви", предоставленную агентом. Для активации контракта необходимо нажать
          кнопку «пресейв».
        </p>
        <p class="flex w-full justify-center playfair-normal text-[20px] mt-2">
          Поздравляем! Вы составили контракт любви.
        </p>
        <p class="flex w-full justify-start playfair-normal text-[16px] mt-2 ms-[40px]">
          Подписи сторон:
        </p>
        <div class="grid grid-cols-2 gap-x-[40px] mt-2 playfair-normal text-[20px] mx-[40px]">
          <div>Сторона А: _ _ _ _ _ _ _ _ _ _ _ _ _</div>
          <div>Сторона Б: _ _ _ _ _ _ _ _ _ _ _ _ _</div>
          <div class="ms-[110px] text-[16px]">(Ваше имя)</div>
          <div class="flex text-wrap text-[16px]">
            (Имя второй половинки: человека, кота. R2D2 и других существ обладающих душой)
          </div>
          <div>Подпись и дата: _ _ _ _ _ _ _ _ _ _</div>
          <div>Подпись и дата: _ _ _ _ _ _ _ _ _ _</div>
        </div>
        <p class="flex w-full justify-center playfair-normal text-[20px] mt-2">
          Агент: Музыкальная группа «ОММО»
        </p>
        <p class="flex w-full justify-center playfair-normal text-[20px] mt-2">
          Срок действия: До востребования / До следующего распада Вселенной.
        </p>
        <p class="flex w-full justify-start playfair-normal text-[16px] mt-5 ms-[40px]">
          Служба поддержки страховых полисов любви ОММО: @OMMO_SPB
        </p>
        <p class="flex w-full justify-start playfair-normal text-[16px] mt-1 ms-[40px] mb-[20px]">
          Хештег для предъявления претензий: #СтраховкаЛюбвиОММО
        </p>
      </div>
    </v-pdf>
  </div>

<div class="flex items-center justify-center mt-8">
  <button
    class="flex gap-[8px] items-center justify-center hover-scale"
    type="button"
    @click="manualDownload"
  >
  <span class="flex text-3xl text-white handjet-normal">
   Скачать контракт
  </span>
    <DownloadIcon class="flex items-center justify-end h-[32px] w-[32px]" />
  </button>
</div>

  <div class="flex gap-[8px] items-center justify-center mt-8">
    <div class="text-3xl text-white handjet-normal">Активировать контракт:</div>
    <button
      class="flex items-center justify-end h-[32px] w-[32px] hover-scale"
      type="button"
      @click="openPreSave"
    >
      <PreSaveIcon />
    </button>
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

  <div class="flex gap-2 items-center justify-center mt-3">
    <button
      class="flex items-center justify-end xl:text-[22px] text-base h-[40px] text-[#7B3994] hover-scale underline handjet-normal"
      type="button"
      @click="resetContract"
    >
      <AgainIcon />
      Попробовать снова
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch, nextTick } from 'vue'
import { useContractStore } from '@/stores/contractStore'
import VkIcon from '@/components/icons/VkIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import PreSaveIcon from '@/components/icons/PreSaveIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import AgainIcon from '@/components/icons/AgainIcon.vue'
import { useRouter } from 'vue-router'
import DownloadIcon from '@/components/icons/DownloadIcon.vue'

const contractStore = useContractStore()

const pdf = ref(true)
const pdfOptions = {
  margin: 0,
  html2canvas: { scale: 4 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' },
}

// определяем iOS
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)

const props = defineProps({
  id: String,
})

const promiseOne = ref(null)
const promiseTwo = ref(null)

const nameOne = ref('')
const nameTwo = ref('')

const placeholder = ref(true)

const openYouTube = () => {
  window.open('https://youtube.com/@ommo_ommo_ommo?si=WaPUf-Z6CVzSkuv', '_blank')
}
const openVk = () => {
  window.open('https://vk.com/club232985627', '_blank')
}
const openTelegram = () => {
  window.open('https://t.me/OMMO_spb', '_blank')
}

// Это теперь пресейв
const openPreSave = () => {
  window.open('https://band.link/MVTNL', '_blank')
}

onMounted(async () => {
  await contractStore.fetchContract(props.id)
})

const removePlaceholder = () => {
  if (placeholder.value) {
    placeholder.value = false
  }
}

const router = useRouter()

const resetContract = () => {
  router.push('/')
}
const manualDownload = async () => {
  try {

    const newWindow = window.open('', '_blank')
    const contractElement = document.querySelector('.contract-bg')

    // Получаем актуальные данные
    const currentNameOne = nameOne.value
    const currentNameTwo = nameTwo.value
    const currentPromiseOne = promiseOne.value || ''
    const currentPromiseTwo = promiseTwo.value || ''

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Контракт любви ОММО - Сохранение</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
          <style>
            /* Сброс стилей */
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 20px;
              background: #f5f5f5;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              min-height: 100vh;
              font-family: 'Playfair Display', serif;
            }

            /* Основной контейнер с размерами A4 */
            .a4-container {
              width: 210mm;
              min-height: 297mm;
              background: white;
              box-shadow: 0 8px 32px rgba(0,0,0,0.15);
              margin: 0 auto;
              position: relative;
            }

            /* Контракт с фоном */
            .contract-print {
              width: 100%;
              height: 100%;
              background-image:
                linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
                url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9Ijk3IiB2aWV3Qm94PSIwIDAgNTg4IDQ3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfM18zNzUpIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfM18zNzUpIj48cGF0aCBkPSJNNDA0IDMyN0gyMjcuNDVWMjI0LjE5SDIzMS4xMTdWMzIzLjMxN0g0MDAuMzMzVjE1My4xNzRIMjMxLjExN1YxNTUuODc0SDIyNy40NVYxNDkuNDkxSDQwNFYzMjdaIiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0zNTguMjI4IDI0NS44NTdDMzQxLjExNyAyNDUuODU3IDMyNy4yNDQgMjU5Ljk3NCAzMjcuMjQ0IDI3Ny4zNDRDMzI3LjI0NCAyOTQuNzE0IDM0MS4xMTcgMzA4LjgzMiAzNTguMjI4IDMwOC44MzJDMzc1LjMzOSAzMDguODMyIDM4OS4yMTEgMjk0LjcxNCAzODkuMjExIDI3Ny4zNDRDMzg5LjIxMSAyNTkuOTc0IDM3NS4zMzkgMjQ1Ljg1NyAzNTguMjI4IDI0NS44NTdaTTM1OC4yMjggMjgzLjYwNUMzNTQuODY3IDI4My42MDUgMzUyLjExNyAyODAuODQzIDM1Mi4xMTcgMjc3LjQwNkMzNTIuMTE3IDI3My45NjggMzU0Ljg2NyAyNzEuMjA2IDM1OC4yMjggMjcxLjIwNkMzNjEuNTg5IDI3MS4yMDYgMzY0LjMzOSAyNzMuOTY4IDM2NC4zMzkgMjc3LjQwNkMzNjQuMzM5IDI4MC44NDMgMzYxLjU4OSAyODMuNjA1IDM1OC4yMjggMjgzLjYwNVoiIGZpbGw9IiMwMjAyMDIiLz48cGF0aCBkPSJNMzExLjM1NiAyNDIuNjY1SDI5Ny4wNTZMMjgzLjA2MSAyNzYuOTc2QzI4MyAyNzcuMDk5IDI4Mi44MTcgMjc3LjA5OSAyODIuNzU2IDI3Ni45NzZMMjY4Ljc2MSAyNDIuNjY1SDI0OC43NzhWMzEyLjE0NkgyNTYuNTM5VjI1OS40ODNIMjU3LjIxMUMyNTcuMjExIDI1OS40ODMgMjU3LjMzMyAyNTkuNDgzIDI1Ny4zOTQgMjU5LjYwNkwyNzguODQ0IDMxMi4xNDZIMjg2LjkxMUwzMDguMzYxIDI1OS42MDZDMzA4LjM2MSAyNTkuNTQ0IDMwOC40MjIgMjU5LjQ4MyAzMDguNTQ0IDI1OS40ODNIMzA5LjIxN1YzMTIuMTQ2SDMxNi45NzhWMjQyLjY2NUgzMTEuMzU2WiIgZmlsbD0iIzU1NTU1NSIvPjxwYXRoIGQ9Ik0zNzEuNjExIDE2NC40MDZIMzY2LjkwNkwzNDMuMzE3IDIyMS4wNTlDMzQzLjI1NiAyMjEuMTgyIDM0My4wNzIgMjIxLjE4MiAzNDMuMDExIDIyMS4wNTlMMzE5LjQyMiAxNjQuNDA2SDI5Ny4xMTdWMjMzLjg4OEgzMTYuODU2VjE4MS4yMjRIMzE3LjUyOEMzMTcuNTg5IDE4MS4yMjQgMzE3LjY1IDE4MS4yMjQgMzE3LjcxMSAxODEuMzQ3TDMzOS4xNjEgMjMzLjg4OEgzNDcuMjI4TDM2OC42NzggMTgxLjM0N0MzNjguNjc4IDE4MS4zNDcgMzY4LjczOSAxODEuMjI0IDM2OC44NjEgMTgxLjIyNEgzNjkuNTMzVjIzMy44ODhIMzg5LjI3MlYxNjQuNDA2SDM3MS42MTFaIiBmaWxsPSIjNTU1NTU1Ii8+PHBhdGggZD0iTTIwNi4xMjIgMTcyLjQ0N0MyMjkuODMzIDE2OS42MjMgMjUxLjQ2NyAxODYuNjI2IDI1NC40IDIxMC4zNzlDMjU1LjMxNyAyMTcuODA2IDI1NC40IDIyNC45ODggMjUxLjc3MiAyMzEuNDk0QzI2NS42NDQgMjIyLjkwMSAyNzQuMDE3IDIwNi43NTggMjcxLjg3OCAxODkuMzg4QzI2OS4wMDYgMTY1LjU3MiAyNDcuMzcyIDE0OC41NyAyMjMuNjYxIDE1MS4zOTRDMjA3LjM0NCAxNTMuMzU4IDE5NC4yNjcgMTY0LjIyMiAxODguNzA2IDE3OC41MjNDMTkzLjgzOSAxNzUuMzMyIDE5OS43NjcgMTczLjE4MyAyMDYuMTgzIDE3Mi40NDdIMjA2LjEyMloiIGZpbGw9IiMxRDFEMUIiLz48cGF0aCBkPSJNMjExLjM3OCAyMjAuNDQ2QzIwNC40NzIgMTk3LjQyOCAyMTcuNDI4IDE3My4zMDYgMjQwLjM0NCAxNjYuNTU0QzI0Ny40OTQgMTY0LjQ2OCAyNTQuNzA2IDE2NC4yODMgMjYxLjU1IDE2NS42OTVDMjUwLjY3MiAxNTMuMzU4IDIzMy4zMTcgMTQ3LjY1IDIxNi42MzMgMTUyLjYyMUMyMTMuNzE3IDE1OS4zNzMgMjAwLjgyMiAxODMuNDk1IDIwNy42NjcgMjA2LjUxMkMyMTIuNDMzIDIyMi4zNDggMjI1LjMyOCAyMzMuNTE5IDI0MC4zNjEgMjM2LjcxMUMyMzYuMzI4IDIzMi4xMDggMjMzLjIxMSAyMjYuNjQ1IDIzMS4zMTcgMjIwLjQ0NkgyMTEuMzc4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzNfMzc1KSIvPjxwYXRoIGQ9Ik0yNTQuODI4IDIxMy4wMTlDMjMxLjc4OSAyMTkuMTU3IDIwOC4wMTcgMjA1LjM0NiAyMDEuNzgzIDE4Mi4yMDZDMTk5LjgyOCAxNzQuOTYzIDE5OS44MjggMTY3LjcyMSAyMDEuNDE3IDE2MC45MDhDMTg4LjgyOCAxNzEuMzQyIDE4Mi44MzkgMTg4LjUyOCAxODcuMzYxIDIwNS40NjlDMTkzLjU5NSAyMjguNjA5IDIxNy4zNjcgMjQyLjQxOSAyNDAuNDA2IDIzNi4yODFDMjU2LjI5NSAyMzIuMDQ2IDI2Ny42NjEgMjE5LjQ2MyAyNzEuMjA2IDIwNC40ODdDMjY2LjU2MSAyMDguMzU0IDI2MSAyMTEuMzAyIDI1NC43NjcgMjEyLjk1N0wyNTQuODI4IDIxMy4wMTlaIiBmaWxsPSIjRkYyRDJEIi8+PHBhdGggZD0iTTIyOS4wMzkgMjM5LjU5NkMyMDQuMjI4IDIzOS41OTYgMTg0IDIxOS4yNzkgMTg0IDE5NC4yOThDMTg0IDE2OS4zMTcgMjA0LjIyOCAxNDkgMjI5LjAzOSAxNDlDMjUzLjg1IDE0OSAyNzQuMDc4IDE2OS4zMTcgMjc0LjA3OCAxOTQuMjk4QzI3NC4wNzggMjE5LjI3OSAyNTMuODUgMjM5LjU5NiAyMjkuMDM5IDIzOS41OTZaTTIyOS4wMzkgMTUyLjY4M0MyMDYuMjQ0IDE1Mi42ODMgMTg3LjY2NyAxNzEuMzQyIDE4Ny42NjcgMTk0LjI5OEMxODcuNjY3IDIxNy4yNTQgMjA2LjI0NCAyMzUuOTEzIDIyOS4wMzkgMjM1LjkxM0MyNTEuODMzIDIzNS45MTMgMjcwLjQxMSAyMTcuMjU0IDI3MC40MTEgMTk0LjI5OEMyNzAuNDExIDE3MS4zNDIgMjUxLjg5NCAxNTIuNjgzIDIyOS4wMzkgMTUyLjY4M1oiIGZpbGw9ImJsYWNrIi8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMl8zXzM3NSkiPjxwYXRoIGQ9Ik02OTggNTY1SDUyMS40NVY0NjIuMTlINTI1LjExN1Y1NjEuMzE3SDY5NC4zMzNWMzkxLjE3NEg1MjUuMTE3VjM5My44NzRINTIxLjQ1VjM4Ny40OTFINjk4VjU2NVoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTUwMC4xMjIgNDEwLjQ0N0M1MjMuODMzIDQwNy42MjMgNTQ1LjQ2NyA0MjQuNjI2IDU0OC40IDQ0OC4zNzlDNTQ5LjMxNyA0NTUuODA2IDU0OC40IDQ2Mi45ODggNTQ1Ljc3MiA0NjkuNDk0QzU1OS42NDQgNDYwLjkwMSA1NjguMDE3IDQ0NC43NTggNTY1Ljg3OCA0MjcuMzg4QzU2My4wMDYgNDAzLjU3MiA1NDEuMzcyIDM4Ni41NyA1MTcuNjYxIDM4OS4zOTRDNTAxLjM0NCAzOTEuMzU4IDQ4OC4yNjcgNDAyLjIyMiA0ODIuNzA2IDQxNi41MjNDNDg3LjgzOSA0MTMuMzMyIDQ5My43NjcgNDExLjE4MyA1MDAuMTgzIDQxMC40NDdINTAwLjEyMloiIGZpbGw9IiMxRDFEMUIiLz48cGF0aCBkPSJNNTA1LjM3OCA0NTguNDQ2QzQ5OC40NzIgNDM1LjQyOCA1MTEuNDI4IDQxMS4zMDYgNTM0LjM0NCA0MDQuNTU0QzU0MS40OTQgNDAyLjQ2OCA1NDguNzA2IDQwMi4yODMgNTU1LjU1IDQwMy42OTVDNTQ0LjY3MiAzOTEuMzU4IDUyNy4zMTcgMzg1LjY1IDUxMC42MzMgMzkwLjYyMUM0ODcuNzE3IDM5Ny4zNzMgNDc0LjgyMiA0MjEuNDk1IDQ4MS42NjcgNDQ0LjUxMkM0ODYuNDMzIDQ2MC4zNDggNDk5LjMyOCA0NzEuNTE5IDUxNC4zNjEgNDc0LjcxMUM1MTAuMzI4IDQ3MC4xMDggNTA3LjIxMSA0NjQuNjQ1IDUwNS4zMTcgNDU4LjQ0Nkg1MDUuMzc4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzNfMzc1KSIvPjxwYXRoIGQ9Ik01NDguODI4IDQ1MS4wMTlDNTI1Ljc4OSA0NTcuMTU3IDUwMi4wMTcgNDQzLjM0NiA0OTUuNzgzIDQyMC4yMDZDNDkzLjgyOCA0MTIuOTYzIDQ5My44MjggNDA1LjcyMSA0OTUuNDE3IDM5OC45MDhDNDgyLjgyOCA0MDkuMzQyIDQ3Ni44MzkgNDI2LjUyOCA0ODEuMzYxIDQ0My40NjlDNDg3LjU5NSA0NjYuNjA5IDUxMS4zNjcgNDgwLjQxOSA1MzQuNDA2IDQ3NC4yODFDNTUwLjI5NSA0NzAuMDQ2IDU2MS42NjEgNDU3LjQ2MyA1NjUuMjA2IDQ0Mi40ODdDNTYwLjU2MSA0NDYuMzU0IDU1NSA0NDkuMzAyIDU0OC43NjcgNDUwLjk1N0w1NDguODI4IDQ1MS4wMTlaIiBmaWxsPSIjRkYyRDJEIi8+PHBhdGggZD0iTTUyMy4wMzkgNDc3LjU5NkM0OTguMjI4IDQ3Ny41OTYgNDc4IDQ1Ny4yNzkgNDc4IDQzMi4yOThDNDc4IDQwNy4zMTcgNDk4LjIyOCAzODcgNTIzLjAzOSAzODdDNTQ3Ljg1IDM4NyA1NjguMDc4IDQwNy4zMTcgNTY4LjA3OCA0MzIuMjk4QzU2OC4wNzggNDU3LjI3OSA1NDcuODUgNDc3LjU5NiA1MjMuMDM5IDQ3Ny41OTZaTTUyMy4wMzkgMzkwLjY4M0M1MDAuMjQ0IDM5MC42ODMgNDgxLjY2NyA0MDkuMzQyIDQ4MS42NjcgNDMyLjI5OEM0ODEuNjY3IDQ1NS4yNTQgNTAwLjI0NCA0NzMuOTEzIDUyMy4wMzkgNDczLjkxM0M1NDUuODMzIDQ3My45MTMgNTY0LjQxMSA0NTUuMjU0IDU2NC40MTEgNDMyLjI5OEM1NjQuNDExIDQwOS4zNDIgNTQ1Ljg5NCAzOTAuNjgzIDUyMy4wMzkgMzkwLjY4M1oiIGZpbGw9ImJsYWNrIi8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwM18zXzM3NSkiPjxwYXRoIGQ9Ik0xMTAgNTY1SC02Ni41VjQ2Mi4xOUgtNjIuODgzNFY1NjEuMzE3SDEwNi4zMzNWMzkxLjE3NEgtNjIuODgzNFYzOTMuODc0SC02Ni41VjM4Ny40OTFIMTEwVjU2NVoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTc3LjYxMTEgNDAyLjQwNkg3Mi45MDU2TDQ5LjMxNjcgNDU5LjA1OUM0OS4yNTU2IDQ1OS4xODIgNDkuMDcyMyA0NTkuMTgyIDQ5LjAxMTEgNDU5LjA1OUwyNS40MjIzIDQwMi40MDZIMy4xMTY3VjQ3MS44ODhIMjIuODU1NlY0MTkuMjI0SDIzLjUyNzhDMjMuNTg4OSA0MTkuMjI0IDIzLjY1IDQxOS4yMjQgMjMuNzExMSA0MTkuMzQ3TDQ1LjE2MTEgNDcxLjg4OEg1My4yMjc4TDc0LjY3NzggNDE5LjM0N0M3NC42Nzc4IDQxOS4zNDcgNzQuNzM4OSA0MTkuMjI0IDc0Ljg2MTEgNDE5LjIyNEg3NS41MzM0VjQ3MS44ODhIOTUuMjcyMlY0MDIuNDA2SDc3LjYxMTFaIiBmaWxsPSIjNTU1NTU1Ii8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwNF8zXzM3NSkiPjxwYXRoIGQ9Ik0xMTAgODlILTY2LjVWLTExLjgxMDRILTYyLjg4MzRWODUuMzE3MkgxMDYuMzMzVi04NC44MjYySC02Mi44ODM0Vi04Mi4xMjU1SC02Ni41Vi04OC41MDlIMTEwVjg5WiIgZmlsbD0iYmxhY2siLz48cGF0aCBkPSJNNjQuMjI3NyA3Ljg1NjU3QzQ3LjExNjYgNy44NTY1NyAzMy4yNDQ0IDIxLjk3MzggMzMuMjQ0NCAzOS4zNDIyQzMzLjI0NDQgNTYuNzE0NSA0Ny4xMTY2IDcwLjgzMTcgNjQuMjI3NyA3MC44MzE3QzgxLjMzODggNzAuODMxNyA5NS4yMTEgNTYuNzE0NSA5NS4yMTEgMzkuMzQyMkM5NS4yMTEgMjEuOTczOCA4MS4zMzg4IDcuODU2NTcgNjQuMjI3NyA3Ljg1NjU3Wk02NC4yMjc3IDQ1LjYwNDhDNjAuODY2NiA0NS42MDQ4IDU4LjExNjYgNDIuODQyOCA1OC4xMTY2IDM5LjQwNTVDNTguMTE2NiAzNS45NjgzIDYwLjg2NjYgMzMuMjA2MiA2NC4yMjc3IDMzLjIwNjJDNjcuNTg4OCAzMy4yMDYyIDcwLjMzODggMzUuOTY4MyA3MC4zMzg4IDM5LjQwNTVDNzAuMzM4OCA0Mi44NDI4IDY3LjU4ODggNDUuNjA0OCA2NC4yMjc3IDQ1LjYwNDhaIiBmaWxsPSIjMDIwMjAyIi8+PHBhdGggZD0iTTE3LjM1NTYgNC42NjQ4M0gzLjA1NTZMLTEwLjkzODggMzguOTc1OUMtMTAuOTk5OSAzOS4wOTg2IC0xMS4xODMzIDM5LjA5ODYgLTExLjI0NDQgMzguOTc1OUwtMjUuMjM4OCA0LjY2NDgzSC00NS4yMjIyVjc0LjE0NjJIMzcuNDYxMVYyMS40ODI4SC0zNi43ODg4Qy0zNi43ODg4IDIxLjQ4MjggLTM2LjY2NjYgMjEuNDgyNyAtMzYuNjA1NSAyMS42MDU1TC0xNS4xNTU1IDc0LjE0NjJILTcuMDg4NDRMMTQuMzYxMiAyMS42MDU1QzE0LjM2MTIgMjEuNTQ0MSAxNC40MjIzIDIxLjQ4MjggMTQuNTQ0NSAyMS40ODI4SDE1LjIxNjdWNzQuMTQ2MkgyMi45Nzc4VjQuNjY0ODNIMTcuMzU1NloiIGZpbGw9IiM1NTU1NTUiLz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXA1XzNfMzc1KSI+PHBhdGggZD0iTTY5OCA4OUg1MjEuNDVWLTExLjgxMDRINTI1LjExN1Y4NS4zMTcySDY5NC4zMzNWLTg0LjgyNjJINTI1LjExN1YtODIuMTI1NUg1MjEuNDVWLTg4LjUwOUg2OThWODlaIiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik02MDUuMzU2IDQuNjY0ODNINTkxLjA1Nkw1NzcuMDYxIDM4Ljk3NTlDNTc3IDM5LjA5ODYgNTc2LjgxNyAzOS4wOTg2IDU3Ni43NTYgMzguOTc1OUw1NjIuNzYxIDQuNjY0ODNINTQyLjc3OFY3NC4xNDYySDU1MC41MzlWMjEuNDgyOEg1NTEuMjExQzU1MS4yMTEgMjEuNDgyOCA1NTEuMzMzIDIxLjQ4MjcgNTUxLjM5NCAyMS42MDU1TDU3Mi44NDQgNzQuMTQ2Mkg1ODAuOTExTDYwMi4zNjEgMjEuNjA1NUM2MDIuMzYxIDIxLjU0NDEgNjAyLjQyMiAyMS40ODI4IDYwMi41NDQgMjEuNDgyOEg2MDMuMjE3Vjc0LjE0NjJINjEwLjk3OFY0LjY2NDgzSDYwNS4zNTZaIiBmaWxsPSIjNTU1NTU1Ii8+PHBhdGggZD0iTTU0OC44MjggLTI0Ljk4MTRDNTI1Ljc4OSAtMTguODQzNCA1MDIuMDE3IC0zMi42NTM4IDQ5NS43ODMgLTU1Ljc5MzhDNDkzLjgyOCAtNjMuMDM2NSA0OTMuODI4IC03MC4yNzkzIDQ5NS40MTcgLTc3LjA5MjRDNDgyLjgyOCAtNjYuNjU3OSA0NzYuODM5IC00OS40NzE3IDQ4MS4zNjEgLTMyLjUzMUM0ODcuNTk1IC05LjM5MTAzIDUxMS4zNjcgNC40MTkzMSA1MzQuNDA2IC0xLjcxODYyQzU1MC4yOTUgLTUuOTUzNzkgNTYxLjY2MSAtMTguNTM2NSA1NjUuMjA2IC0zMy41MTMxQzU2MC41NjEgLTI5LjY0NjIgNTU1IC0yNi43IDU0OC43NjcgLTI1LjA0MjhMNTQ4LjgyOCAtMjQuOTgxNFoiIGZpbGw9IiNGRjJEMkQiLz48cGF0aCBkPSJNNTIzLjAzOSAxLjU5NTg2QzQ5OC4yMjggMS41OTU4NiA0NzggLTE4LjcyMDcgNDc4IC00My43MDIxQzQ3OCAtNjguNjgzNCA0OTguMjI4IC04OSA1MjMuMDM5IC04OUM1NDcuODUgLTg5IDU2OC4wNzggLTY4LjY4MzQgNTY4LjA3OCAtNDMuNzAyMUM1NjguMDc4IC0xOC43MjA3IDU0Ny44NSAxLjU5NTg2IDUyMy4wMzkgMS41OTU4NlpNNTIzLjAzOSAtODUuMzE3MkM1MDAuMjQ0IC04NS4zMTcyIDQ4MS42NjcgLTY2LjY1NzkgNDgxLjY2NyAtNDMuNzAyMUM0ODEuNjY3IC0yMC43NDYyIDUwMC4yNDQgLTIuMDg2OSA1MjMuMDM5IC0yLjA4NjlDNTQ1LjgzMyAtMi4wODY5IDU2NC40MTEgLTIwLjc0NjIgNTY0LjQxMSAtNDMuNzAyMUM1NjQuNDExIC02Ni42NTc5IDU0NS44OTQgLTg1LjMxNzIgNTIzLjAzOSAtODUuMzE3MloiIGZpbGw9ImJsYWNrIi8+PC9nPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfM18zNzUiIHgxPSIyMzMuMDExIiB5MT0iMTU0LjcwOCIgeDI9IjIwOC42MzYiIHkyPSIyMDcuNDc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGMkQyRCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk5MUIxQiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzNfMzc1IiB4MT0iNTI3LjAxMSIgeTE9IjM5Mi43MDgiIHgyPSI1MDIuNjM2IiB5Mj0iNDQ1LjQ3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjJEMkQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5OTFCMUIiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iY2xpcDBfM18zNzUiPjxyZWN0IHdpZHRoPSI1ODgiIGhlaWdodD0iNDc2IiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwMV8zXzM3NSI+PHJlY3Qgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxNzgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODQgMTQ5KSIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwMl8zXzM3NSI+PHJlY3Qgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxNzgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzggMzg3KSIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwM18zXzM3NSI+PHJlY3Qgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxNzgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwIDM4NykiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcDRfM18zNzUiPjxyZWN0IHdpZHRoPSIyMjAiIGhlaWdodD0iMTc4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtODkpIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXA1XzNfMzc1Ij48cmVjdCB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE3OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OCAtODkpIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+');
              background-repeat: repeat;
              background-size: 120px 97px;
              background-blend-mode: lighten;
              display: flex;
              flex-direction: column;
              padding: 20px 0;
            }

            /* Точные стили как в оригинале */
            .playfair-extrabold {
              font-family: 'Playfair Display', serif;
              font-weight: 900;
              font-size: 38px;
              text-align: center;
              margin: 0;
            }
            .playfair-normal {
              font-family: 'Playfair Display', serif;
              font-weight: 400;
              font-size: 20px;
              text-align: center;
              margin: 8px auto;
              width: 50%;
            }
            .playfair-bold {
              font-family: 'Playfair Display', serif;
              font-weight: 700;
              font-size: 20px;
              margin: 8px auto;
              width: fit-content;
            }
            .playfair-italic {
              font-family: 'Playfair Display', serif;
              font-weight: 400;
              font-style: italic;
              font-size: 20px;
              text-align: center;
              margin: 1px auto;
              width: fit-content;
              padding: 0 40px;
            }

            /* Flex utilities */
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-grow { flex-grow: 1; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .justify-start { justify-content: flex-start; }

            /* Width utilities */
            .w-full { width: 100%; }
            .w-1\\/2 { width: 50%; }
            .w-fit { width: fit-content; }

            /* Margin utilities */
            .mx-auto { margin-left: auto; margin-right: auto; }
            .mt-2 { margin-top: 8px; }
            .mt-1 { margin-top: 4px; }
            .mt-5 { margin-top: 20px; }
            .mt-30 { margin-top: 30px; }
            .ms-40 { margin-left: 40px; }
            .ms-110 { margin-left: 110px; }
            .mb-20 { margin-bottom: 20px; }
            .mr-20 {margin-right: 20px;}

            /* Padding utilities */
            .px-40 { padding-left: 40px; padding-right: 40px; }

            /* Text utilities */
            .text-center { text-align: center; }
            .text-22 { font-size: 22px; }
            .text-16 { font-size: 16px; }
            .text-wrap { text-wrap: wrap; }
            .uppercase { text-transform: uppercase; }

            /* Grid utilities */
            .grid { display: grid; }
            .grid-cols-2 { grid-template-columns: 1fr 1fr; }
            .gap-x-40 { column-gap: 40px; }

            /* Инструкция */
            .instructions {
              background: rgba(0,0,0,0.9);
              color: white;
              padding: 15px 25px;
              border-radius: 10px;
              font-family: Arial, sans-serif;
              font-size: 16px;
              text-align: center;
              margin: 20px auto;
              max-width: 600px;
            }

            .close-btn {
              background: #7B3994;
              color: white;
              border: none;
              padding: 12px 20px;
              border-radius: 6px;
              cursor: pointer;
              font-family: Arial, sans-serif;
              font-size: 14px;
              margin: 20px auto;
              display: block;
            }
          </style>
        </head>
        <body>
          <div class="a4-container">
            <div class="contract-print">
              <p class="playfair-extrabold text-center">Контракт на страхование любви</p>
              <p class="playfair-normal w-1/2 mx-auto">(Официальный договор о превентивной защите от эмоциональных рисков)</p>

              <p class="playfair-bold w-fit mx-auto">ПРЕАМБУЛА:</p>
              <p class="playfair-normal w-full px-40 text-wrap">
                Стороны,руководствуясь парадоксальным желанием обезопасить себя от хаоса чувств, заключили
                настоящий договор о нижеследующем. Настоящим подтверждается,что любовь, хоть и является
                формой высшего безумия, может быть подвержена разумному регулированию.
              </p>

              <p class="playfair-bold w-fit mx-auto">ВЗАИМНЫЕ ОБЯЗАТЕЛЬСТВА</p>
              <p class="playfair-normal w-full px-40 text-wrap">
                Во исполнение целей настоящего договора стороны принимают на себя следующие добровольные
                обязательства:
              </p>

              <div class="flex flex-col flex-grow items-center justify-center">
                <div class="playfair-bold text-22 w-fit mx-auto uppercase">${currentNameOne}</div>
                <p class="playfair-italic w-fit text-wrap">Обязуюсь ${currentPromiseOne}</p>

                <div class="playfair-bold text-22 w-fit mx-auto mt-30 uppercase">${currentNameTwo}</div>
                <p class="playfair-italic w-fit text-wrap">Обязуюсь ${currentPromiseTwo}</p>
              </div>

              <p class="playfair-bold w-fit mx-auto">ВСТУПЛЕНИЕ В СИЛУ</p>
              <p class="playfair-normal w-full px-40 text-wrap">
                Настоящий договор вступает в силу 28 ноября, после того как стороны прослушают песню
                "Страховка любви", предоставленную агентом. Для активации контракта необходимо нажать
                кнопку «пресейв».
              </p>

              <p class="playfair-normal w-full justify-center text-center">Поздравляем! Вы составили контракт любви.</p>
              <p class="playfair-normal text-16 w-full justify-start ms-40">Подписи сторон:</p>

              <div class="grid grid-cols-2 gap-x-40 mt-2 playfair-normal text-20 justify-center w-full mr-20">
                <div>Сторона А: _ _ _ _ _ _ _ _ _ _ _ _ _</div>
                <div>Сторона Б: _ _ _ _ _ _ _ _ _ _ _ _ _</div>
                <div class="ms-110 text-16">(Ваше имя)</div>
                <div class="text-16 text-wrap">(Имя второй половинки: человека, кота. R2D2 и других существ обладающих душой)</div>
                <div>Подпись и дата: _ _ _ _ _ _ _ _ _ _</div>
                <div>Подпись и дата: _ _ _ _ _ _ _ _ _ _</div>
              </div>

              <p class="playfair-normal w-full justify-center text-center">Агент: Музыкальная группа «ОММО»</p>
              <p class="playfair-normal w-full justify-center text-center">Срок действия: До востребования / До следующего распада Вселенной.</p>
              <p class="playfair-normal text-16 w-full justify-start mt-5 ms-40">
                Служба поддержки страховых полисов любви ОММО: @OMMO_SPB
              </p>
              <p class="playfair-normal text-16 w-full justify-start mt-1 ms-40 mb-20">
                Хештег для предъявления претензий: #СтраховкаЛюбвиОММО
              </p>
            </div>
          </div>
        </body>
      </html>
    `)

    newWindow.document.close()

  } catch (error) {
    console.error('Ошибка:', error)
    alert('❌ Не удалось открыть контракт для сохранения')

    // Fallback
    alert(`📱 Сохранение контракта:
1. Убедитесь что весь контракт виден на экране
2. Сделайте скриншот
3. Или используйте: Поделиться → На принтер → Сохранить как PDF`)
  }
};
// const manualDownload = async () => {
//   try {
//     alert('🖼️ Открываем контракт для сохранения...')
//
//     // Создаем новое окно
//     const newWindow = window.open('', '_blank')
//
//     // Копируем весь HTML контракта
//     const contractElement = document.querySelector('.contract-bg')
//
//     // Получаем computed стили для фона
//     const styles = window.getComputedStyle(contractElement)
//     const bgImage = styles.backgroundImage
//
//     newWindow.document.write(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Контракт любви ОММО - Сохранение</title>
//           <meta charset="UTF-8">
//           <style>
//             @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400&display=swap');
//
//             body {
//               margin: 0;
//               padding: 40px 20px;
//               background: #f5f5f5;
//               display: flex;
//               justify-content: center;
//               align-items: flex-start;
//               min-height: 100vh;
//               font-family: 'Playfair Display', serif;
//             }
//
//             .contract-print {
//               width: 210mm;
//               min-height: 296mm;
//               background-image: ${bgImage};
//               background-repeat: repeat, repeat;
//               background-size: auto auto;
//               background-blend-mode: lighten;
//               background-color: white;
//               position: relative;
//               display: flex;
//               flex-direction: column;
//               padding: 40px 0;
//               box-shadow: 0 8px 32px rgba(0,0,0,0.15);
//               border-radius: 8px;
//             }
//
//             .playfair-extrabold {
//               font-family: 'Playfair Display', serif;
//               font-weight: 900;
//               font-size: 38px;
//               text-align: center;
//               margin: 0;
//             }
//             .playfair-normal {
//               font-family: 'Playfair Display', serif;
//               font-weight: 400;
//               font-size: 20px;
//               text-align: center;
//               margin: 8px auto;
//               width: 50%;
//             }
//             .playfair-bold {
//               font-family: 'Playfair Display', serif;
//               font-weight: 700;
//               font-size: 20px;
//               margin: 8px auto;
//               width: fit-content;
//             }
//             .playfair-italic {
//               font-family: 'Playfair Display', serif;
//               font-weight: 400;
//               font-style: italic;
//               font-size: 20px;
//               text-align: center;
//               margin: 1px auto;
//               width: fit-content;
//               padding: 0 40px;
//             }
//             .text-wrap {
//               text-wrap: wrap;
//             }
//             .w-full { width: 100%; }
//             .w-1\\/2 { width: 50%; }
//             .w-fit { width: fit-content; }
//             .mx-auto { margin-left: auto; margin-right: auto; }
//             .mt-2 { margin-top: 8px; }
//             .mt-1 { margin-top: 4px; }
//             .mt-5 { margin-top: 20px; }
//             .mt-30 { margin-top: 30px; }
//             .ms-40 { margin-left: 40px; }
//             .ms-110 { margin-left: 110px; }
//             .mb-20 { margin-bottom: 20px; }
//             .px-40 { padding-left: 40px; padding-right: 40px; }
//             .flex { display: flex; }
//             .flex-col { flex-direction: column; }
//             .flex-grow { flex-grow: 1; }
//             .items-center { align-items: center; }
//             .justify-center { justify-content: center; }
//             .justify-start { justify-content: flex-start; }
//             .text-center { text-align: center; }
//             .text-22 { font-size: 22px; }
//             .text-16 { font-size: 16px; }
//             .grid { display: grid; }
//             .grid-cols-2 { grid-template-columns: 1fr 1fr; }
//             .gap-x-40 { column-gap: 40px; }
//             .uppercase { text-transform: uppercase; }
//
//             .instructions {
//               position: fixed;
//               top: 20px;
//               left: 50%;
//               transform: translateX(-50%);
//               background: rgba(0,0,0,0.9);
//               color: white;
//               padding: 15px 25px;
//               border-radius: 10px;
//               font-family: Arial, sans-serif;
//               font-size: 16px;
//               text-align: center;
//               z-index: 1000;
//               max-width: 80%;
//               backdrop-filter: blur(10px);
//             }
//
//             .close-btn {
//               position: fixed;
//               top: 20px;
//               right: 20px;
//               background: #7B3994;
//               color: white;
//               border: none;
//               padding: 12px 20px;
//               border-radius: 6px;
//               cursor: pointer;
//               font-family: Arial, sans-serif;
//               font-size: 14px;
//               z-index: 1001;
//             }
//           </style>
//         </head>
//         <body>
//
//           <button class="close-btn" onclick="window.close()">✕ Закрыть</button>
//
//           <div class="contract-print">
//             ${contractElement.innerHTML}
//           </div>
//
//
// </body>
// </html>`)
//
// newWindow.document.close()
//
// } catch (error) {
// console.error('Ошибка:', error)
// alert('❌ Не удалось открыть контракт для сохранения')
//
// // Fallback - простая инструкция
// alert(`📱 Сохранение контракта:
//
// 1. Убедитесь что весь контракт виден на экране
// 2. Сделайте скриншот:
// - iPhone: Боковые кнопки + Громкость вверх
// - iPad: Боковая кнопка + Home
// - Mac: Cmd+Shift+4
//
// 3. Или используйте: Поделиться → На принтер → Сохранить как PDF`)
// }
// }
// авто-скачивание только НЕ iOS
watch(
  () => contractStore.contract,
  async (newContract) => {
    if (newContract) {
      nameOne.value = newContract.partners[0]?.name
      nameTwo.value = newContract.partners[1]?.name
      promiseOne.value = newContract.partners[0]?.promise?.description
      promiseTwo.value = newContract.partners[1]?.promise?.description

      await nextTick()

      if (!isIOS) {
        setTimeout(() => pdf.value.download(), 1000)
      }
    }
  },
)
</script>


<style scoped>
.contract-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('@/assets/logo-pdf.svg');
  background-repeat: repeat, repeat;
  background-size: auto auto;
  background-blend-mode: lighten;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 6px 10px;
  text-align: left;
}
th {
  background: #f0f0f0;
}


.subscribe {
  font-size: 32px;
  color: #ffffff;
  text-shadow:
    -2px -2px 0 #5449a8,
    2px -2px 0 #5449a8,
    -2px 2px 0 #5449a8,
    2px 2px 0 #5449a8;
}
</style>
