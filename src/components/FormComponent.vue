<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()
import NamesForm from './NamesFormComponent.vue'
import PromisesForm from './PromisesFormComponent.vue'
import ContractForm from './ContractComponent.vue'

const backHandler = () => {
  contractStore.stateBackward()
}
const loading = ref(false)
const isExpanded = ref(false)

onMounted(async () => {
  isExpanded.value = false
  const urlParams = new URLSearchParams(window.location.search)

  if (urlParams.get('contract')) {
    contractStore.state = 'contract'
    await contractStore.fetchContract(urlParams.get('contract'))
  }
})

</script>

<template>
  <!-- <div :class="['form-container', { expanded: isExpanded }]"> -->
    <div class="form-container">
    <!--       <div role="status" class='z-50'> -->
    <!--     <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
    <!--         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/> -->
    <!--         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/> -->
    <!--     </svg> -->
    <!--     <span class="sr-only">Loading...</span> -->
    <!-- </div> -->
    <img
      src="@/assets/arrow-back.svg"
      class="absolute top-0 left-0 opacity-50 w-[28px] h-[28px] ms-[40px] mt-[20px] cursor-pointer"
      @click="backHandler"
      v-show="contractStore.state === 'promises'"
    />
    <div class="flashing-square"></div>
    <div class="heart"></div>
    <div class="title-container">
      <div class="title caveat-bold">"LOVE CONTRACT 2025"</div>
      <div class="title-shadow caveat-bold">"LOVE CONTRACT 2025"</div>
    </div>
    <NamesForm v-if="contractStore.state === 'names'" />
    <PromisesForm v-if="contractStore.state === 'promises'" />
    <Transition name="fade">
      <ContractForm
        v-show="contractStore.state === 'contract' && !contractStore.isLoading"
      />
    </Transition>

    <Transition>
      <div role="status" v-show="contractStore.isLoading" class="flex justify-center items-center w-full h-full">
        <svg
          aria-hidden="true"
          class="inline w-10 h-10 text-[#DD00FF] animate-spin fill-[#DDFF00]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.form-container {
  @apply flex flex-col gap-y-[0px] w-[460px] items-center min-h-[512px] xl:mt-[311px] mt-24
  pt-[38px] pb-[80px];
  position: relative;
  background: linear-gradient(to bottom, #0b002d, #170325);
  box-shadow: 0 4px 4px 0 #00000040; /* чтобы подсветка не вылезала за края */
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

@media  (min-width: 400px) and (max-width: 420px) {
  .title-shadow {
    top: 30%;
    left: 8.5%;
  }
  .form-container {

  }
  .flashing-square {
    display: none;
  }
}
@media (max-width: 430px) {
  .title-shadow {
    top: 30%;
    left: 10.5%;
  }
  .form-container {

  }
  .flashing-square {
    display: none;
  }
}
@media (max-width: 390px) {

  .title-shadow {
    left: 6%;
  }
  .form-container {

  }
  .flashing-square {
    display: none;
  }
}

</style>
