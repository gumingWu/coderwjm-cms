import Request from './request'
import type { RequestConfig } from './request/type'
const { VUE_APP_BASE_URL, VUE_APP_TIMEOUT } = process.env

import type { AxiosResponse } from 'axios'
import type { Response, Login } from '@/service/request/type'

const request = new Request({
  baseURL: VUE_APP_BASE_URL,
  timeout: VUE_APP_TIMEOUT,
  interceptors: {
    requestInterceptor(config: RequestConfig) {
      console.log('实例请求拦截器')

      return config
    },
    responseInterceptor(res) {
      console.log('实例响应拦截器')

      return res
    }
  }
})

request
  .post<AxiosResponse<Response<Login>>>('/login', {
    data: {
      name: 'coderwhy',
      password: '123456'
    }
  })
  .then((res) => {
    console.log(res)

    const token = res.data.data.token

    request
      .get<AxiosResponse>('/test', {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        console.log(res)
      })
  })
