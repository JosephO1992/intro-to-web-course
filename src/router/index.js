import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Lesson1 from '../views/Lesson1.vue'
import Lesson2 from '../views/Lesson2.vue'
import Lesson3 from '../views/Lesson3.vue'
import Lesson4 from '../views/Lesson4.vue'
import Lesson5 from '../views/Lesson5.vue'

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
  },
  {
    path: '/Lesson-3',
    name: 'Lesson 3',
    component: Lesson3
  },
  {
    path: '/Lesson-4',
    name: 'Lesson 4',
    component: Lesson4
  },
  {
    path: '/Lesson-5',
    name: 'Lesson 5',
    component: Lesson5
  }
  
    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
