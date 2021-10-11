import { App } from 'vue'
import { ElButton, ElInput } from 'element-plus'

const components = [ElButton, ElInput]

export default {
  install(app: App): void {
    components.forEach((item) => {
      app.component(item.name, item)
    })
  }
}
