import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfigType } from './type'

export default class Request {
  instance: AxiosInstance

  constructor(config: RequestConfigType) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      config.interceptor?.requestInterceptor
    )

    this.instance.interceptors.response.use(
      config.interceptor?.responseInterceptor
    )
  }

  get<T = any>(url: string, params?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.get(url, {
        params
      })
    })
  }

  post<T = any>(
    url: string,
    data: { name: string; password: string }
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.post(url, {
        data
      })
    })
  }
}
