import HelloWorld from '../components/HelloWorld.vue'
import TestComponent from '../components/TestComponent.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes = [
  { path: '/', name: 'Hello World', component: HelloWorld },
  { path: '/test', name: 'Test', component: TestComponent },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
  })

