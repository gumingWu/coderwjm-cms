import {
  accountLoginRequest,
  getUserinfoById,
  getUserMenuByRoleId
} from '@/service/user'
import type { IAccount, IUserInfoResponse } from '@/service/user/type'
import { defineStore } from 'pinia'
import storage from '@/utils/storage'

export default defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userinfo: IUserInfoResponse) {
      this.userInfo = userinfo
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
      this.setUserInfo(userinfo)

      // 3. 请求用户菜单
      const roleId = userinfo.role.id
      const menuRes = await getUserMenuByRoleId(roleId)
      console.log(menuRes)
    }
  }
})
