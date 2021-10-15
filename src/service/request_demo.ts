import Request from './request'
import type { RequestConfigType } from './request/type'
const { BASE_URL: baseURL } = process.env

const config: RequestConfigType = {
  baseURL: 'http://152.136.185.210:5000'
}
console.log(baseURL)

const request = new Request(config)

// request
//   .post('/login', {
//     name: 'coderwhy',
//     password: '123456'
//   })
//   .then((res) => {
//     console.log(res)
//   })
request.instance
  .post('/login', {
    name: 'coderwhy',
    password: '123456'
  })
  .then((res) => {
    console.log(res)
  })
