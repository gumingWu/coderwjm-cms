const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const DashboardPlugin = require('webpack-dashboard/plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin({
  disable: process.env.NODE_ENV !== 'development', // 不知道为啥不行，后面研究，猜测是因为用了脚手架
  outputFormat: 'human'
})

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
  },
  configureWebpack: smp.wrap({
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new DashboardPlugin()
    ]
  }),

  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
