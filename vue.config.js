const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: true,
  assetsDir: './static',
  //   outputDir: 'buildDir/dist',
  transpileDependencies: ['element-ui'], // 需要编译的依赖包名
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'nancy tools'
      return args
    })

    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  configureWebpack:
    process.env.NODE_ENV === 'production'
      ? {
          optimization: {
            minimizer: [
              new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                  compress: {
                    drop_console: true,
                    drop_debugger: true
                  }
                }
              })
            ]
          }
        }
      : {},
  devServer: {
    proxy: {
      '/server': {
        // target: 'http://admin.okpay.com',
        // target: 'http://kz.downok.cn',
        target: 'http://192.168.2.103:8033',
        // target: 'http://testapi.pc.goitw.com',
        changeOrigin: true,
        pathRewrite: {
          '/server': '/'
          // '/server': '/api'
        }
      }
    }
  }
}
