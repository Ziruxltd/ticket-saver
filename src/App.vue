<script setup lang="ts">
</script>

<template>
  <div>
    <nav>
      <img
        class="logo"
        src="./assets/logo.png"
        alt="Vue logo"
        @click="() => $router.push('/')"
      />
      <img
        class="logo vue"
        src="./assets/vue.svg"
        alt="Vue logo"
        @click="() => $router.push('/test')"
      />
    </nav>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #9F1A8Faa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
