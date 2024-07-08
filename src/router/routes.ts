import HelloWorld from '../components/HelloWorld.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TypeTest from '../views/typeTest/TypeTest.vue'


const routes = [
  { path: '/', name: 'Hello World', component: HelloWorld },
  { path: '/typing-test', name: 'Typing Test', component: TypeTest },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
  })

