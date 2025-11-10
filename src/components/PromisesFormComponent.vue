<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()
import { usePromiseStore } from '@/stores/promiseStore'
const promiseStore = usePromiseStore()

import DropDown from '@/components/elements/DropDown.vue'

const promises = ref([])
const partnerOne = ref(null)
const partnerTwo = ref(null)

onMounted(async () => {
  await promiseStore.fetchItems()
  promises.value = promiseStore.promises
})

const handleSubmit = async () => {
  await contractStore.updatePartnerOne(null, partnerOne.value)
  await contractStore.updatePartnerTwo(null, partnerTwo.value)
  await contractStore.stateForward(contractStore.state)

  await contractStore.createContract()
}

</script>

<template>
  <form class="flex flex-col w-full items-center justify-center handjet-normal" @submit.prevent="handleSubmit">
    <div class="name-inputs">
      <div class="title-placeholder handjet-normal">Выберите пункты договора</div>
      <div>
        <label for="partnerOne" class="input-label caveat-bold capitalize">{{
          contractStore.partnerOne.name || 'Ваше имя'
        }}</label>
        <div class="input-wrapper">
          <DropDown
            :options="promiseStore.promisesWithImages"
            id="partnerOne"
            v-model="partnerOne"
          />
        </div>
      </div>
      <div class="flex w-full justify-center items-center mt-[8px]">
        <img src="@/assets/plus.svg" class="flex w-[32px] text-center" />
      </div>
      <div>
        <label for="partnerTwo" class="input-label caveat-bold capitalize">{{
          contractStore.partnerTwo.name || 'Имя партнера'
        }}</label>
        <div class="input-wrapper">
          <DropDown
            :options="promiseStore.promisesWithImages"
            id="partnerTwo"
            v-model="partnerTwo"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="name-submit russo-one-regular">
      <div>Составить договор</div>
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_384_83)">
          <path
            d="M26.4008 5.63295V3.59887H24.2371V1.5H17.7456V3.59887H15.5819V5.76264H13.4181V3.59887H11.2542V1.5H4.76293V3.59887H2.59887V5.63295H0.5V14.3707H2.59887V16.4048H4.76293V18.5686H6.92661V20.7325H9.09038V22.8963H11.2542V25.0601H13.4181V27.2241H15.5819V25.0601H17.7456V22.8963H19.9096V20.7325H22.0733V18.5686H24.2371V16.4048H26.4008V14.3707H28.5V5.63295H26.4008Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_384_83">
            <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </form>
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
}

.name-inputs {
  @apply flex flex-col gap-y-[24px] mt-[0px] w-full;
  padding: 0 40px;
  z-index: 1;
}

.input-label {
  @apply mb-[16px] pb-[2px];
  display: flex;
  color: #d32fe8;
  font-size: 36px;
  text-shadow: 3px 1px #ff00f233;
  text-shadow: 0 0 8px 0 #4e027a80;
}

.input-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 9999px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background: url('@/assets/noise.svg');
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: 5;
    opacity: 0.1;
  }
}

select option {
  padding: 12px;
  background: white;
  color: #2d3748;
}

.name-submit {
  @apply mt-[100px];
  position: relative;
  display: flex;
  width: calc(100% - 80px);
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  border-radius: 12px;
  background-image: linear-gradient(to right, #802b86, #75122f);
  box-shadow: 0 0 12px 0 #802b8699;
  height: 61px;
  color: white;
  font-size: 24px;
  color: white;
  transition: color 1s;

  &:hover {
    background-image: linear-gradient(to right, #913198, #861637);
    box-shadow: 0 0 12px 0 #802b86cc;
  }

  &:hover svg {
    color: #ff0004;
  }
}

.name-submit::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/noise.svg');
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 0;
}
</style>
