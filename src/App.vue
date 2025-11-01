<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div id="app">
    <div class="bg-gradient bg-stars"></div>
    <div class="bg-vectors"></div>
    <div class="bg-grid"></div>
    <div class="content-layer">
      <NavbarComponent />
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
</style>
