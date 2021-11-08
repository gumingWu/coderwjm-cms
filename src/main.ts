import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import userStore from '@/store/modules/user'
import globalRegister from '@/global'
import 'normalize.css'

function setupStore(): void {
  const uStore = userStore()
  uStore.loadLocalLogin()
}

const app = createApp(App)
app.use(store)
setupStore()
app.use(router).use(globalRegister).mount('#app')
