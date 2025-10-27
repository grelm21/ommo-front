<script setup>
import { onMounted } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()
import NamesForm from './NamesFormComponent.vue'
import PromisesForm from './PromisesFormComponent.vue'
import ContractForm from './ContractComponent.vue'

const backHandler = () => {
  contractStore.stateBackward()
}

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search)

  if(urlParams.get('contract')) {
    contractStore.state = "contract"
    await contractStore.fetchContract(urlParams.get('contract'))
  }
})

</script>

<template>
  <div class="form-container">
    <img src="@/assets/arrow-back.svg" class="absolute top-0 left-0 opacity-50 w-[28px] h-[28px]
      ms-[40px] mt-[20px] cursor-pointer" @click="backHandler" v-show="contractStore.state !== 'names'" />
    <div class="flashing-square"></div>
    <div class="heart"></div>
    <div class="title-container">
      <div class="title caveat-bold">"LOVE CONTRACT 2025"</div>
      <div class="title-shadow caveat-bold">"LOVE CONTRACT 2025"</div>
    </div>
    <NamesForm v-if="contractStore.state === 'names'" />
    <PromisesForm v-if="contractStore.state === 'promises'" />
    <ContractForm v-if="contractStore.state === 'contract'" />
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
