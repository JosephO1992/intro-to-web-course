import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Lesson1 from '../components/Lesson1.vue'
import Lesson2 from '../components/Lesson2.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/lesson-1',
    name: 'Lesson 1',
    component: Lesson1
  },
  {
    path: '/lesson-2',
    name: 'Lesson 2',
    component: Lesson2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
