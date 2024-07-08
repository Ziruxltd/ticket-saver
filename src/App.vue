<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="header-container">
    <HeaderComponent />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>

<style scoped>
  .header-container {
    width: 100%;
  }
</style>
