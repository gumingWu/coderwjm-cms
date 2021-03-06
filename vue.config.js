const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const DashboardPlugin = require('webpack-dashboard/plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BACKEN } = process.env

const smp = new SpeedMeasurePlugin({
  disable: process.env.NODE_ENV !== 'development', // 不知道为啥不行，后面研究，猜测是因为用了脚手架
  outputFormat: 'human'
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
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
      .set('@u', '@/utils')
  },
  configureWebpack: smp.wrap({
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
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
        target: BACKEN,
        pathRewrite: {
          '/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
