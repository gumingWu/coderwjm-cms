export interface IDataType<T = any> {
  code: number
  data: T
}

export interface IPageListType {
  list: any
  totalCount: number
}
