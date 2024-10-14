import { Login } from '@/types/api.ts'
import request from '@/utils/request.ts'

export default {
  login<T>(params: Login.params): Promise<T> {
    return request.post('/users/login', params)
  }
}
