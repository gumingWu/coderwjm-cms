import { accountLoginRequest } from '@/service/login'
import type { IAccount } from '@/service/login/type'
import { defineStore } from 'pinia'

export default defineStore('login', {
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async accountLogin(req: IAccount) {
      const res = await accountLoginRequest(req)
      console.log(res)
    }
  }
})
