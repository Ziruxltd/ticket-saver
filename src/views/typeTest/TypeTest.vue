<template>
    <h1>Testing your typing skills!</h1>
    <div class="test-words-container">
        <p :class="{'current-word': isCurrentWord(index)}" v-for="( word, index ) in arrayOfWords">
            {{ word }}
        </p>
    </div>

    <input type="text" v-model="typedPhrase" @input="checkPhrase" @keydown="handleSpaceKey"/>
    <p>correct: {{ correctTypedWords }}</p>
    <p>Incorrect: {{ incorrectTypedWords }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const arrayOfWords = ref(['hola', 'tonto', 'como', 'estás', 'tu', 'por', 'aquí', 'otra', 'vez', 'trabajando']);
const typedPhrase = ref<string>('');
const currentWordIndex = ref<number>(0);
const correctTypedWords = ref<number>(0);
const incorrectTypedWords = ref<number>(0);

function checkPhrase(e: any) {
}

function handleSpaceKey(e: any) {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (typedPhrase.value === arrayOfWords.value[currentWordIndex.value]) {
            correctTypedWords.value++;
        } else {
            incorrectTypedWords.value++;
        }
        currentWordIndex.value++;
        typedPhrase.value = '';
    }
}

function isCurrentWord(index: number) {
    return index === currentWordIndex.value;
}
</script>

<style>
.test-words-container{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 1rem;
}

.current-word {
  background-color: white;
  color: black; /* Ensures text is readable on blue background */
}
</style>