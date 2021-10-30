import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestOptionsType extends AxiosRequestConfig {
  interceptors?: InterceptorType
}

export interface InterceptorType {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ResponseType<T = any> {
  code: number
  data: T
}

export interface LoginResponse {
  id: number
  name: string
  token: string
}
