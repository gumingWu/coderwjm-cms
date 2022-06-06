const plugins = ['@vue/babel-plugin-jsx']

if (process.env.NODE_ENV === 'development') {
  plugins.push('dynamic-import-node')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
