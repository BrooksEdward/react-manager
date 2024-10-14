import axios, { AxiosError } from 'axios'
import { hideLoading, showLoading } from '@/utils/loading/index.tsx'
import { message } from 'antd'
import storage from './storage'
import { Result } from '@/types/api.ts'

console.log('meta.env: ', import.meta.env)

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  timeoutErrorMessage: '请求超时',
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }
    if (import.meta.env.VITE_MOCK === 'true') {
      config.baseURL = import.meta.env.VITE_MOCK_API
    } else {
      config.baseURL = import.meta.env.VITE_BASE_API
    }

    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data: Result = response.data
    hideLoading()
    console.log('response data: ', response.data)

    if (data.code === 500001) {
      message.error(data.msg)
      storage.remove('token')
      location.href = '/login'
    } else if (data.code != 0) {
      // if (response.config.showError === false) {
      //   return Promise.resolve(data)
      // } else {
      //   message.error(data.msg)
      //   return Promise.reject(data)
      // }
      message.error(data.msg)
      return Promise.resolve(data)
    }

    return data.data
  },
  error => {
    hideLoading()
    // message.error(error.message)
    console.error('response error: ', error)
    return Promise.reject(error.message)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params })
  },
  post<T>(url: string, params: object): Promise<T> {
    return instance.post(url, params)
  }
}
