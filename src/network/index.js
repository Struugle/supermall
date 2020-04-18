import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'',
    timeout:3000
  })

  //拦截请求
  instance.interceptors.request.use(config => {
    return config
  },error => {
    console.log(error);
  })

  //拦截响应体
  instance.interceptors.response.use(config => {
    return config
  },error => {
    console.log(error)
  });

  return instance(config)
}


