import { defineStore } from 'pinia'

export default defineStore('system', {
  state: () => {
    return {
      darkMode: false
    }
  },
  actions: {
    changeDarkMode(val: boolean) {
      this.darkMode = val
    }
  }
})
