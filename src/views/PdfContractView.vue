<template>
  <v-pdf
    ref="pdf"
    :options="pdfOptions"
    filename="my-awesome-report.pdf"
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
        Во исполнение целей настоящего договора Стороны принимают на себя следующие добровольные
        обязательства:
      </p>

      <!-- #данные -->
      <div class="flex flex-grow flex-col items-center justify-center">
        <div class="flex w-fit mx-auto playfair-bold text-[22px]">{{ nameOne.toUpperCase() }}</div>
        <p class="flex w-fit px-[40px] playfair-italic text-[20px] text-center mt-[1px] text-wrap">
          {{ promiseOne?.description }}
        </p>
        <div class="flex w-fit mx-auto playfair-bold text-[22px] mt-[30px]">{{ nameTwo.toUpperCase() }}</div>
        <p class="flex w-fit px-[40px] playfair-italic text-[20px] mt-[1px] text-wrap ">
          {{ promiseTwo?.description }}
        </p>
      </div>

      <p class="flex w-fit mx-auto playfair-bold mt-2 text-[20px]">ВСТУПЛЕНИЕ В СИЛУ</p>
      <p class="flex w-full px-[40px] playfair-normal text-[20px] text-center mt-[1px] text-wrap">
        Настоящий договор вступает в силу 28 ноября,после того как Стороны прослушают песню
        "страховка любви", предоставленную Агентом. Для активации Полиса необходимо нажать кнопку
        «пресейв».
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
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()
import { usePromiseStore } from '@/stores/promiseStore'
const promiseStore = usePromiseStore()

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

onMounted(async () => {
  await promiseStore.fetchItems()
  await contractStore.fetchContract(props.id)
})

watch(
  () => contractStore.contract,
  (newContract) => {
    if (newContract) {
    promiseStore.fetchItems()

    console.log(newContract)

      nameOne.value = newContract.partners[0]?.name
      nameTwo.value = newContract.partners[1]?.name
      promiseOne.value = promiseStore.byId(newContract.partners[0]?.promise_id)
      promiseTwo.value = promiseStore.byId(newContract.partners[1]?.promise_id)
      setTimeout(() => {
        pdf.value.download()
        // window.close()
      }, 1000)
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
</style>
