import axios from 'axios'
const request= axios.create({
  baseURL: 'http://39.98.154.87:8888/'
})

// 添加请求拦截器
request.interceptors.request.use(config => {
  // 写你想要处理的代码，注意：config一定要返回，否则会报错
  // ...
  return config
})
// 添加响应拦截器
request.interceptors.response.use(res => {
  // 处理响应的代码写在这里，注意：res一定要返回，否则会报错
  return res
})
export { request}
