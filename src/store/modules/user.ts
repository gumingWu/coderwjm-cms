import {
  accountLoginRequest,
  getUserinfoById,
  getUserMenuByRoleId
} from '@/service/user'
import type {
  IAccount,
  IUserInfoResponse,
  IMenuResponse
} from '@/service/user/type'
import { defineStore } from 'pinia'
import router from '@/router'
import storage from '@/utils/storage'
import { mapMenusToRoutes } from '@/utils/map-menus'

export default defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenu: [] as any[] // ts默认初始化空数组为never[]，所以要转换成any[]
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userinfo: IUserInfoResponse) {
      this.userInfo = userinfo
    },
    setUserMenu(userMenu: IMenuResponse[]) {
      this.userMenu = userMenu

      const routes = mapMenusToRoutes(userMenu)
      console.log(routes)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },

    async accountLogin(req: IAccount) {
      // 1. 登录获取token
      const res = await accountLoginRequest(req)
      const { id, token } = res.data
      storage.set('token', token)
      this.setToken(token)

      // 2. 请求用户数据
      const userinfoRes = await getUserinfoById(id)
      const userinfo = userinfoRes.data
      storage.set('userInfo', userinfo)
      this.setUserInfo(userinfo)

      // 3. 请求用户菜单
      const roleId = userinfo.role.id
      const menuRes = await getUserMenuByRoleId(roleId)
      const menu = menuRes.data
      storage.set('userMenus', menu)
      this.setUserMenu(menu)

      router.push('/main')
    },

    loadLocalLogin() {
      const token: string = storage.get('token')
      if (token) {
        this.setToken(token)
      }
      const userInfo: IUserInfoResponse = storage.get('userInfo')
      if (userInfo) {
        this.setUserInfo(userInfo)
      }

      const userMenus: IMenuResponse[] = storage.get('userMenus')
      if (userMenus) {
        this.setUserMenu(userMenus)
      }
    }
  }
})
