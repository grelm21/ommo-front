<script setup>
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
import NamesForm from './NamesFormConponent.vue'
const contractStore = useContractStore()

const partnerOne = ref('')
const partnerTwo = ref('')

const handleSubmit = async () => {
  await contractStore.updatePartnerOne(partnerOne.value, null)
  await contractStore.updatePartnerTwo(partnerTwo.value, null)
}
</script>

<template>
  <div class="form-container" @submit.prevent="handleSubmit">
    <div class="flashing-square"></div>
    <div class="heart"></div>
    <div class="title-container">
      <div class="title caveat-bold">"LOVE CONTRACT 2025"</div>
      <div class="title-shadow caveat-bold">"LOVE CONTRACT 2025"</div>
    </div>
    <NamesForm />
  </div>
</template>

<style scoped>
.form-container {
  @apply flex flex-col gap-y-[0px] w-[460px] items-center min-h-[512px] mt-[311px] mb-[100px]
  pt-[38px] pb-[80px];
  position: relative;
  background: linear-gradient(to bottom, #0b002d, #170325);
  /* background: gray; */
  box-shadow: 0 4px 4px 0 #00000040;
}

.flashing-square {
  position: absolute;
  background-image: url('@/assets/flashing-square.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 209px;
  height: 204px;
  top: -110px;
  right: -125px;
  z-index: -1;
}

.title-container {
  position: relative;
  @apply flex justify-center items-center py-[38px];
  background-image: url('@/assets/waves-form.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 40px;
}

.heart {
  position: absolute;
  background-image: url('@/assets/heart-form.svg');
  right: -122px;
  background-size: fit;
  background-repeat: no-repeat;
  height: 272.6px;
  width: 296.72px;
  margin-top: -170px;
  top: 50%;
  z-index: 0;
}

.title {
  position: relative;
  background: -webkit-linear-gradient(right, #ddff00, #dd00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}

.title-shadow {
  content: '"LOVE CONTRACT 2025"';
  position: absolute;
  top: 29%;
  left: 13%;
  background: -webkit-linear-gradient(right, #ddff0050, #dd00ff50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 0;
}

</style>
