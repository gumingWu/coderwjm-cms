import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import storage from '@/utils/storage'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@v/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@v/main/index.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@v/not-found/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = storage.get('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
