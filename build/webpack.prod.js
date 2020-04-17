const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = () => {
  return merge(base, {
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCSSPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      }),
      // new MinifyPlugin()
    ],
  })
}
