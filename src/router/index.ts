import { createRouter, createWebHistory } from 'vue-router'

import CharacterView from '../views/CharacterView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/character/:id',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
