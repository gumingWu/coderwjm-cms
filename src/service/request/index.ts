import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptionsType } from './type'

class Request {
  instance: AxiosInstance

  constructor(options: RequestOptionsType) {
    this.instance = axios.create(options)

    // 使用config中的interceptor，每个实例单独的拦截器
    this.instance.interceptors.request.use(
      options.interceptors?.requestInterceptor,
      options.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      options.interceptors?.responseInterceptor,
      options.interceptors?.responseInterceptorCatch
    )

    // 所有请求器实例都有的拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err: any) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  request(config: RequestOptionsType) {
    return new Promise((resolve, reject) => {
      // 这是单独的请求配置的拦截器
      this.instance.interceptors.request.use(
        config.interceptors?.requestInterceptor,
        config.interceptors?.requestInterceptorCatch
      )
      this.instance.interceptors.response.use(
        config.interceptors?.responseInterceptor,
        config.interceptors?.responseInterceptorCatch
      )

      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .then((err) => {
          reject(err)
          return err
        })
    })
  }

  get(url: string, config: RequestOptionsType) {
    return this.request({
      url,
      method: 'get',
      ...config
    })
  }

  post(url: string, config: RequestOptionsType) {
    return this.request({
      url,
      method: 'post',
      ...config
    })
  }

  put(url: string, config: RequestOptionsType) {
    return this.request({
      url,
      method: 'put',
      ...config
    })
  }

  delete(url: string, config: RequestOptionsType) {
    return this.request({
      url,
      method: 'delete',
      ...config
    })
  }
}

export default Request
