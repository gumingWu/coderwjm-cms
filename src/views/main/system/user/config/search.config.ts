import { IForm } from '@/components/w-form/src/type'

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: 'id',
      field: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      field: 'name',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      field: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      field: 'sport',
      placeholder: '请选择喜欢的运动',
      options: [
        {
          title: '篮球',
          value: 'basketball'
        },
        {
          title: '足球',
          value: 'football'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      field: 'createTime',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px'
}
