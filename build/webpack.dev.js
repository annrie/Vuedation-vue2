const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // cheap-module-eval-source-map is faster for development
  devtool: 'eval-source-map',
  // devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist/'),
    },
    hot: 'only',
    client: true,
    compress: true,
    host: '0.0.0.0',
    port: PORT || 8888,
    open: true,
    historyApiFallback: true,
    // eslint-disable-next-line no-dupe-keys
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },
  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8888
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // console.log(devWebpackConfig)
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
            ],
            notes: ['Some additional notes to be displayed upon successful compilation'],
          },
          // eslint-disable-next-line no-unused-vars
          onErrors: function (severity, errors) {
            // You can listen to errors transformed and prioritized by the plugin
            // severity can be 'error' or 'warning'
          },
          // should the console be cleared between each compilation?
          // default is true
          clearConsole: true,

          // add formatters and transformers (see below)
          additionalFormatters: [],
          additionalTransformers: [],
        })
      )

      resolve(devWebpackConfig)
    }
  })
})
