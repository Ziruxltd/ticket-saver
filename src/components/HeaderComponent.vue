<template>
    <nav class="navigation-bar">
        <button @click="() => $router.push('/')">
            Home
        </button>
        <button @click="() => $router.push('/typing-test')">
            Typing Test
        </button>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .navigation-bar {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 1rem;
    }
</style>