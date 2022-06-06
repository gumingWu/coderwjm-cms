const style = {
  light: {
    '--el-text-color-regular': '#606266',
    '--darkmode-bg-color': '#f0f2f5',
    '--darkmode-card-bg-color': '#fff'
  },
  dark: {
    '--el-text-color-regular': 'white',
    '--darkmode-bg-color': '#1a1a1a',
    '--darkmode-card-bg-color': '#242424'
  }
}

export function changeStyleMode(darkMode: boolean): void {
  const mode = darkMode ? 'dark' : 'light'
  const el = document.documentElement
  Object.entries(style[mode]).forEach((item) => {
    el.style.setProperty(item[0], item[1])
  })
}
