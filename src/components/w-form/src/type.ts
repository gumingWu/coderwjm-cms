export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}

export interface IFormItem {
  type: IFormType
  label: string
  field: string
  rules?: any[]
  placeholder?: string
  // 针对select的选项
  options?: IFormItemSelectOption[]
  // 其他拓展项
  otherOptions?: any
}

export type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export type IFormItemSelectOption = {
  title: string
  value: any
}
