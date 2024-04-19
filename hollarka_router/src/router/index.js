import { createRouter, createWebHistory } from 'vue-router'
import ExamplesView from '../views/ExamplesView.vue'
import AboutView from '../views/AboutView.vue'
import SkriptaView from '../views/ApplicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/examples',
      name: 'examples',
      component: ExamplesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'skripta',
      component: SkriptaView
    }

  ]
})

export default router
