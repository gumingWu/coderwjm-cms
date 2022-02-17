const style = {
  light: {
    '--header-bg-color': '#fff',
    '--el-text-color-regular': '#606266',
    '--header-dropdown-bg-color': '#fff'
  },
  dark: {
    '--header-bg-color': '#1a1a1a',
    '--el-text-color-regular': 'white',
    '--header-dropdown-bg-color': '#1a1a1a'
  }
}

export function changeStyleMode(darkMode: boolean): void {
  const mode = darkMode ? 'dark' : 'light'
  const el = document.documentElement
  Object.entries(style[mode]).forEach((item) => {
    el.style.setProperty(item[0], item[1])
  })
}
