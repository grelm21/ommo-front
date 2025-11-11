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
          Настоящий договор вступает в силу 28 ноября,после того как стороны прослушают песню
          "страховка любви", предоставленную агентом. Для активации контракта необходимо нажать
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
</template>

<script setup>
import { ref, defineProps, onMounted, watch, nextTick } from 'vue'
import { useContractStore } from '@/stores/contractStore'
import VkIcon from '@/components/icons/VkIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import PreSaveIcon from '@/components/icons/PreSaveIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
const contractStore = useContractStore()

const pdf = ref(true)
const pdfOptions = {
  margin: 0,
  html2canvas: { scale: 4 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' },
}

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
  window.open(
    // 'https://music.yandex.ru/users/PortGrad/playlists/1002?ref_id=6C255153-B5A6-468D-BC87-0835CAB0B8F4&utm_medium=copy_link',
    'https://band.link/MVTNL',
    '_blank',
  )
}

onMounted(async () => {
  await contractStore.fetchContract(props.id)
})

const removePlaceholder = () => {
  if (placeholder.value) {
    placeholder.value = false
  }
}

watch(
  () => contractStore.contract,
  async (newContract) => {
    if (newContract) {
      nameOne.value = newContract.partners[0]?.name
      nameTwo.value = newContract.partners[1]?.name
      promiseOne.value = newContract.partners[0]?.promise?.description
      promiseTwo.value = newContract.partners[1]?.promise?.description

      await nextTick()

      setTimeout(() => {
        pdf.value.download()
      }, 200)
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
