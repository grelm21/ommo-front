<script setup>
import { ref } from 'vue'
import { useContractStore } from '@/stores/contractStore'
const contractStore = useContractStore()

const partner_one = ref('')
const partner_two = ref('')

const handleSubmit = async () => {
  await contractStore.createContract({
    contract: {
      partner_one: {
        name: partner_one.value,
        promise_id: 1,
      },
      partner_two: {
        name: partner_two.value,
        promise_id: 2,
      },
    },
  })
}
</script>

<template>
  <form
    class="flex flex-col w-[512px] items-center bg-white rounded-lg shadow-md h-[512px]"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="partner_one"
      type="text"
      placeholder="Партнер 1"
      class="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
    />
    <input
      v-model="partner_two"
      type="text"
      placeholder="Партнер 2"
      class="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
    />
    <button type="submit">Создать договор</button>
  </form>
</template>

<style scoped></style>
