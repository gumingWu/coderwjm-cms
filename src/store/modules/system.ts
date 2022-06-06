import { getPageListData } from '@/service/system'
import type { IPageListType } from '@/service/type'
import { defineStore } from 'pinia'
import type { PageListActionType } from '../types/system'

interface Test {
  [key: string]: any
}

export default defineStore('system', {
  state: () => {
    return {
      darkMode: false,
      list: {
        users: [],
        role: [],
        goods: [],
        menu: []
      },
      count: {
        users: 0,
        role: 0,
        goods: 0,
        menu: 0
      }
    }
  },
  actions: {
    changeDarkMode(val: boolean) {
      this.darkMode = val
    },
    async getPageListAction(payload: PageListActionType) {
      // 1. 获取pageUrl
      const pageName: string = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2. 对页面发送请求
      const pageResult = await getPageListData<IPageListType>(
        pageUrl,
        payload.queryInfo
      )

      // 3. 存储数据
      const { list, totalCount } = pageResult.data
      ;(this.list as Test)[pageName] = list
      ;(this.count as Test)[pageName] = totalCount
      // console.log((this.list as Test)[pageName])

      // this.list[pageName] = list
    }
  }
})
