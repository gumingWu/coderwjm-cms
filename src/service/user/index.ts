import request from '..'
import type { IDataType } from '../type'
import type {
  IAccount,
  IAccountResponse,
  IUserInfoResponse,
  IMenuResponse
} from './type'

export const accountLoginRequest = (account: IAccount) => {
  return request.post<IDataType<IAccountResponse>>('/login', {
    data: account
  })
}

export const getUserinfoById = (id: number) => {
  return request.get<IDataType<IUserInfoResponse>>(`/users/${id}`, {
    showLoading: false
  })
}

export const getUserMenuByRoleId = (roleId: number) => {
  return request.get<IDataType<IMenuResponse[]>>(`/role/${roleId}/menu`, {
    showLoading: false
  })
}
