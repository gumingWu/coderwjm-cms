const plugins = []

if (process.env.NODE_ENV === 'development') {
  console.log(1)
  plugins.push('dynamic-import-node')
} else {
  console.log(2)
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
