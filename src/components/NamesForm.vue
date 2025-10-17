<script setup>
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()

const partnerOne = ref('')
const partnerTwo = ref('')

const handleSubmit = async () => {
  await contractStore.updatePartnerOne(partnerOne.value, null)
  await contractStore.updatePartnerTwo(partnerTwo.value, null)
}
</script>

<template>
  <form class="form-container" @submit.prevent="handleSubmit">
    <div class="flashing-square"></div>
    <div class="heart"></div>
    <div class="title-container">
      <div class="title caveat-bold">"LOVE CONTRACT 2025"</div>
      <div class="title-shadow caveat-bold">"LOVE CONTRACT 2025"</div>
    </div>

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
      <img src="@/assets/arrow.svg" class="w-[25px]" />
    </button>
  </form>
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

.title-placeholder {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px #E5E82F33;
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
  background-image: linear-gradient(to right, #802B86, #75122F);
  box-shadow: 0 0 12px 0 #802B8699;
  height: 61px;
  color: white;
  font-size: 24px;
  transition: all 1s ease;

  &:hover {
    background-image: linear-gradient(to right, #913198, #861637);
    box-shadow: 0 0 12px 0 #802B86CC;
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
