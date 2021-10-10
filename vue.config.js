const path = require('path')

module.exports = {
  // 配置一
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@c': '@/components'
  //     }
  //   }
  // }
  // 配置二
  // configureWebpack: (config) => {
  //   // 这样写会覆盖vue-cli的配置，所以要重新写@
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     '@c': '@/components'
  //   }
  // }
  // 配置三
  chainWebpack: (config) => {
    const alias = config.resolve.alias
    alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@c', '@/components')
      .set('@v', '@/views')
  }
}
