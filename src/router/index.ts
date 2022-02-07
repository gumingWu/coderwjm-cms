import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import storage from '@/utils/storage'
import useUserStore from '@/store/modules/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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

const findFirstRoute = () => {
  const userStore = useUserStore()
  const menus = userStore.userMenu
  if (menus.length === 0) {
    return '/login'
  }
  const firstMenus = menus[0]
  if (firstMenus.type === 1) {
    const firstMenusChild = firstMenus.children[0]
    return firstMenusChild.url
  }
}

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

  if (to.path === '/main') {
    return findFirstRoute()
  }
})

export default router
