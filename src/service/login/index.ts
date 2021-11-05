import request from '..'
import type { IDataType } from '../type'
import type { IAccount } from './type'

export const accountLoginRequest = (account: IAccount) => {
  return request.post<IDataType<IAccount>>('/login', {
    data: account
  })
}
