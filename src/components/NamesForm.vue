<script setup>
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()

const partner_one = ref('')
const partner_two = ref('')

const handleSubmit = async () => {
  await contractStore.updatePartnerOne(partner_one.value, null)
  await contractStore.updatePartnerTwo(partner_two.value, null)
}
</script>

<template>
  <form
    class="form-container"
    @submit.prevent="handleSubmit"
  >

    <div class="title">ioio</div>
    <!-- <input -->
    <!--   v-model="partner_one" -->
    <!--   type="text" -->
    <!--   placeholder="Партнер 1" -->
    <!--   class="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500" -->
    <!-- /> -->
    <!-- <input -->
    <!--   v-model="partner_two" -->
    <!--   type="text" -->
    <!--   placeholder="Партнер 2" -->
    <!--   class="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500" -->
    <!-- /> -->
    <!-- <button type="submit">Создать договор</button> -->
  </form>
</template>

<style scoped>
  .form-container {
    @apply flex flex-col w-[460px] items-center rounded-lg shadow-md h-[723px];
    position: relative;
    background: linear-gradient(to bottom, #0B002D, #0B0014);
  }

  .title {
    background-image: url('@/assets/waves-form.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

  }
</style>
