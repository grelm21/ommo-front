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
    <div class="heart"></div>
    <div class="title-container">
      <div class="title handjet-extra-bold">"LOVE CONTRACT 2025"</div>
      <div class="title-shadow handjet-extra-bold">"LOVE CONTRACT 2025"</div>
    </div>

    <div class="name-inputs">
      <div>
        <lable for="partnerOne" class="flex handjet-normal text-white text-[28px] mb-[16px]"
          >Имя партнера 1</lable
        >
        <input
          id="partnerOne"
          v-model="partnerOne"
          type="text"
          class="handjet-normal text-[28px]"
          autocomplete="off"
        />
      </div>
      <div class="flex w-full justify-center items-center mt-[8px]">
        <img src="@/assets/plus.svg" class="flex w-[32px] text-center" />
      </div>
      <div>
        <lable for="partnerTwo" class="flex handjet-normal text-white text-[28px] mb-[16px]"
          >Имя партнера 2</lable
        >
        <input
          id="partnerTwo"
          v-model="partnerTwo"
          type="text"
          class="handjet-normal text-[28px]"
          autocomplete="off"
        />
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
  background: linear-gradient(to bottom, #0b002d, #0b0014);
  /* background: gray; */
  box-shadow: 0 0 4px 0 #00000040;
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
  margin-top: -136.3px;
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
  top: 31%;
  left: 20%;
  background: -webkit-linear-gradient(right, #ddff0050, #dd00ff50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 0;
}

.name-inputs {
  @apply flex flex-col gap-y-[24px] mt-[18px] w-full;
  padding: 0 32px;
  z-index: 1;
}

input {
  border-radius: 9999px;
  border: 5px solid #06267f;
  height: 68px;
  width: 100%;
  padding: 0 32px;

  &:focus,
  &:hover {
    border: 5px solid #5415f6;
  }
}

.name-submit {
  @apply mt-[80px];
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  border-radius: 12px;
  background: #4627a9;
  width: 276px;
  height: 61px;
  color: white;
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    background: #5f40c299;
    box-shadow: 0 0 12px 0 #5f40c299;
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
