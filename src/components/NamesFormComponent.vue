<script setup>
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()

const partnerOne = ref('')
const partnerTwo = ref('')

const handleSubmit = async () => {
  await contractStore.updatePartnerOne(partnerOne.value, null)
  await contractStore.updatePartnerTwo(partnerTwo.value, null)
  await contractStore.updateState(contractStore.state)
}
</script>

<template>
  <form class="flex flex-col w-full items-center justify-center"  @submit.prevent="handleSubmit">
    <div class="name-inputs">
      <div class="title-placeholder handjet-normal">Введите ваши имена</div>
      <div>
        <lable for="partnerOne" class="input-label handjet-normal">Ваше имя</lable>
        <div class="input-wrapper">
          <input
            id="partnerOne"
            v-model="partnerOne"
            type="text"
            class="caveat-bold"
            autocomplete="off"
            placeholder="Имя"
          />
        </div>
      </div>
      <div class="flex w-full justify-center items-center mt-[8px]">
        <img src="@/assets/plus.svg" class="flex w-[32px] text-center" />
      </div>
      <div>
        <lable for="partnerTwo" class="input-label handjet-normal">Имя партнера</lable>
        <div class="input-wrapper">
          <input
            id="partnerTwo"
            v-model="partnerTwo"
            type="text"
            class="caveat-bold"
            autocomplete="off"
            placeholder="Имя"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="name-submit russo-one-regular">
      <div>Продолжить</div>
      <img src="@/assets/arrow-next.svg" class="w-[25px]" />
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
  font-size: 32px;
  text-shadow: 3px 1px #ff00f233;
  text-shadow: 0 0 8px 0 #4e027a80;
}

.input-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 9999px;
  width: 100%;

  input {
    position: relative;
    border-radius: 9999px;
    border: 5px solid #802b86;
    height: 68px;
    width: 100%;
    padding: 0 32px;
    background: none;
    /* url('@/assets/noise.svg'); */
    /* mix-blend-mode: multiply; */
    color: #ffffff;
    font-size: 28px;

    &::placeholder {
      color: #9fa7b2;
    }

    &:focus,
    &:hover {
      border: 5px solid #b215f6;
      box-shadow: 0 0 12px 0 #5415f680;
    }
  }

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
  transition: all 1s ease;

  &:hover {
    background-image: linear-gradient(to right, #913198, #861637);
    box-shadow: 0 0 12px 0 #802b86cc;
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
  z-index: 5;
}
</style>
