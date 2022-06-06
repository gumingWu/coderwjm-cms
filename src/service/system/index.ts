import request from '..'
import type { IDataType } from '../type'

export function getPageListData<T>(url: string, queryInfo: any) {
  return request.post<IDataType<T>>(url, {
    url,
    data: queryInfo
  })
}
