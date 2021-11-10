import { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElCard,
  ElForm,
  ElFormItem,
  ElCheckbox
} from 'element-plus'

const components = [ElButton, ElInput, ElCard, ElForm, ElFormItem, ElCheckbox]

export default {
  install(app: App): void {
    components.forEach((item) => {
      app.component(item.name, item)
    })
  }
}
