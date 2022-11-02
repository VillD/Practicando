import { createRouter, createWebHistory } from 'vue-router'
import TeacherFormView from '../views/TeacherFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TeacherView',
      component: TeacherFormView
    },
  ]
})

export default router
