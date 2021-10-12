import axios from 'axios'

// // 使用http://httpbin.org/，模拟请求
// axios.get('http://httpbin.org/get').then((res) => {
//   console.log(res)
//   console.log(res.data)
// })

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'wjm'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.data)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'www'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.data)
//   })

// 补充Promise知识，可以定义resolve的类型
new Promise<string>((resolve) => {
  resolve('123')
  // resolve(123)  // rgument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'
}).then((res) => {
  console.log(res)
})

// axios全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 1
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// 还能针对部分请求做不一样的配置
axios
  .get('/get', {
    params: {
      name: 'test_params'
    },
    timeout: 20000,
    headers: {
      token: 'aaa'
    }
  })
  .then((res) => {
    console.log(res)
  })

// 合并多个请求，一起返回，结果是一个数组，原理是Promise.all，可看源码，直接返回一个Promise.all
axios
  .all([
    axios.get('/get', {
      params: {
        name: '测试多请求1'
      }
    }),
    axios.get('/get', {
      params: {
        name: '测试多请求2'
      }
    }),
    axios.get('/get', {
      params: {
        name: '测试多请求3'
      }
    })
  ])
  .then((res) => {
    console.log(res)
  })
