import Request from './request'
import type { RequestConfig } from './request/type'
const { VUE_APP_BASE_URL, VUE_APP_TIMEOUT } = process.env

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

export default request

// request
//   .post<AxiosResponse<Response<Login>>>('/login', {
//     data: {
//       name: 'coderwhy',
//       password: '123456'
//     }
//   })
//   .then((res) => {
//     console.log(res)

//     const token = res.data.data.token

//     request
//       .get<AxiosResponse>('/test', {
//         headers: {
//           Authorization: token
//         }
//       })
//       .then((res) => {
//         console.log(res)
//       })
//   })
