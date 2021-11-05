import axios from 'axios'
import type { AxiosInstance, Method } from 'axios'
import type { RequestConfig } from './type'

class Request {
  instance: AxiosInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    // 设置每个请求实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    // 设置全部实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截')

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截')

        return res
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(
    url: string,
    method: Method,
    config: RequestConfig<T>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>({
          url,
          method,
          ...config
        })
        .then((res) => {
          resolve(res)
        })
        .catch((e) => {
          reject(e)
          return e
        })
    })
  }

  get<T = any>(url: string, config: RequestConfig<T>): Promise<T> {
    return this.request<T>(url, 'get', config)
  }

  post<T = any>(url: string, config: RequestConfig<T>): Promise<T> {
    return this.request<T>(url, 'post', config)
  }

  put<T = any>(url: string, config: RequestConfig<T>): Promise<T> {
    return this.request<T>(url, 'put', config)
  }

  delete<T = any>(url: string, config: RequestConfig<T>): Promise<T> {
    return this.request<T>(url, 'delete', config)
  }
}

export default Request
