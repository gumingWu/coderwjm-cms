import Request from './request'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// import type { ResponseType, LoginResponse } from './request/type'

const request = new Request({
  baseURL: '/api'
})

// 登录并验证，要先在config中配置代理，不然直接写url没用
request.instance
  .post('/login', {
    name: 'coderwhy',
    password: '123456'
  })
  .then((res: any) => {
    console.log('普通request', res)

    const token = res.data.data.token

    request
      .get('/test', {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        console.log('普通request', res)
      })
  })

const request2 = new Request({
  baseURL: '/api',
  interceptors: {
    requestInterceptor: (config: AxiosRequestConfig) => {
      console.log('请求2，加上当前请求的拦截')
      return config
    },
    responseInterceptor: (res: AxiosResponse<any>) => {
      res.data['request2'] = '哈哈哈'
      return res
    }
  }
})

request2
  .post('/login', {
    data: {
      name: 'coderwhy',
      password: '123456'
    }
  })
  .then((res) => {
    console.log('请求2，加上当前请求的拦截', res)

    // TODO 加上返回类型定义
  })
