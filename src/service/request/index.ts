import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

class Request {
  instance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.instance = axios.create(options)
  }
}

export default Request
