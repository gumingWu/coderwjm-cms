import Request from './request'

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
    console.log(res)

    const token = res.data.data.token

    request.instance
      .get('/test', {
        headers: {
          Authorization: token
        }
      })
      .then((res1) => {
        console.log(res1)
      })
  })
