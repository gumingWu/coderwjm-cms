import { App } from 'vue'
import registerElement from './registerElement'

export default {
  install(app: App): void {
    app.use(registerElement)
  }
}
