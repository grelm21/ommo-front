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
  emit('update:modelValue', option.code)
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
      Обязуюсь
      <img v-if="selectedOption?.image" :src="selectedOption?.image" class="option-image-selected"/>
      {{ selectedOption?.code || '...' }}
    </div>
    <transition name="slide-fade">
      <div class="options-wrapper" v-if="isDropdownVisible">
        <div class="options-grid">
          <div
            class="option"
            v-for="(option, index) in props.options"
            :key="index"
            @click="toggleOptionSelect(option)"
          >
            <img
              v-if="option.image"
              :src="option.image"
              class="option-image-grid"
            />
            <span class="option-text">{{ option.code }}</span>
          </div>
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
  align-items: center;
  gap: 12px;
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
  border: 5px solid #b215f6;
  box-shadow: 0 0 12px 0 #5415f680;
}

.option-image-selected {
  width: 24px;
  height: 24px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.options-wrapper {
  position: absolute;
  border-radius: 30px;
  top: -8px;
  left: 0;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  z-index: 20;
  margin-top: 8px;
  background-color: #10012B;
  border: 5px solid #b215f6;
  box-shadow: 0 0 12px 0 #5415f680;
  color: #8A35DE;
}

/* Сетка 2 колонки */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 16px;
}

.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  box-sizing: border-box;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 80px;
  color: white;
  text-align: center;
}

.option:hover {
  background-color: rgba(138, 53, 222, 0.3);
  transform: translateY(-2px);
}

.option-image-grid {
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.option:hover .option-image-grid {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.option-text {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
