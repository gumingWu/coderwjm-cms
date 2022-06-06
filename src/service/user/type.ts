export interface IAccount {
  name: string
  password: string
}

export interface IAccountResponse {
  id: number
  name: string
  token: string
}

export interface IUserInfoResponse {
  id: number
  cellphone: number
  name: string
  enable: number
  realname: string
  createAt: string
  updateAt: string
  department: {
    id: number
    leader: string
    name: string
    parentId: string | null
    createAt: string
  }
  role: {
    id: number
    intro: string
    name: string
    createAt: string
    updateAt: string
  }
}

export interface IMenuResponse {
  id: number
  name: string
  type: string
  url: string
  icon: string
  sort: number
  children: Array<IMenuChild>
}
export interface IMenuChild extends IMenuResponse {
  parentId: number
  permission?: string
}
