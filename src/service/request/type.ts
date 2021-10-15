import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface ResponseType {
  code: string
  message: string
  data?: unknown
}

/**
 * 一般拦截器的写法是：
 * service.interceptor.request.use((request) => {
 *  return request
 * })
 * service.interceptor.response.use((response) => {
 *  return response
 * })
 */

interface InterceptorType {
  requestInterceptor?: (request: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptor?: (res: AxiosResponse) => ResponseType
}

export interface RequestConfigType extends AxiosRequestConfig {
  interceptor?: InterceptorType
}
