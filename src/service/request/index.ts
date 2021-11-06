import axios from 'axios'
import type { AxiosInstance, Method } from 'axios'
import type { RequestConfig } from './type'
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus'
const { VUE_APP_SHOWLOADING } = process.env

class Request {
  instance: AxiosInstance
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading || Boolean(VUE_APP_SHOWLOADING)

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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            text: '请稍等',
            lock: true
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
        this.loading?.close()
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
