<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div id="app">
    <div class="bg-gradient"></div>
    <div class="content-layer">
      <NavbarComponent />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
