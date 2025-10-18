<script setup>
import { defineProps, defineEmits, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const selectedOption = ref(null)

const isDropdownVisible = ref(false)

const dropDown = ref(null)

const toggleOptionSelect = (option) => {
  selectedOption.value = option
  emit('update:modelValue', option)
  isDropdownVisible.value = false
}

const closeDropdown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div class="dropdown-wrapper caveat-bold" ref="dropDown">
    <div
      class="dropdown-selected-option"
      :class="{ 'dropdown-selected-option--active': isDropdownVisible }"
      @click="isDropdownVisible = true"
    >
      Обязуюсь {{ selectedOption?.code || '...' }}
    </div>
    <transition name="slide-fade">
      <div class="options-wrapper" v-if="isDropdownVisible">
        <div
          class="option"
          v-for="(option, index) in props.options"
          :key="index"
          @click="toggleOptionSelect(option)"
        >
          {{ option.code }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown-wrapper {
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  color: white;
  width: 100%;
}

.dropdown-selected-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 9999px;
  border: 5px solid #802b86;
  height: 68px;
  width: 100%;
  padding: 0 32px;
  box-shadow: 0 0 12px 0 #802b8699;
  color: #ffffff;
  font-size: 28px;
}

.dropdown-selected-option--active {
  display: flex;
  border: 5px solid #b215f6;
  box-shadow: 0 0 12px 0 #5415f680;
}

.options-wrapper {
  position: absolute;
  border-radius: 30px;
  top: -8px;
  left: 0;
  width: 100%;
  max-height: 256px;
  overflow-y: auto;
  z-index: 20;
  margin-top: 8px;
  background-color: #10012B;
  border: 5px solid #b215f6;
  box-shadow: 0 0 12px 0 #5415f680;
  color: #8A35DE
}

.option:hover {
  background-color: #c5c5c5;
}

.option {
  padding: 16px;
  box-sizing: border-box;
}

.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
