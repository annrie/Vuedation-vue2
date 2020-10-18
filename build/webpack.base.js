const path = require('path')
// const fs = require('fs');
// const utils = require('./utils');
// const config = require('../config');
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const StyleLintPlugin = require('stylelint-webpack-plugin')
// const STYLELINT = ['./src/assets/scss/**/*.s?(a|c)ss', '**/*.vue']
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: resolve(''),
  entry: {
    app: resolve('src') + '/main.js',
  },
  output: {
    path: resolve('dist'),
    filename: devMode ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    chunkFilename: devMode ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    publicPath: './',
  },
  // devtool: 'inline-source-map', // ブラウザでのデバッグ用にソースマップを出力する
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.css'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      zf: 'foundation-sites/js',
    },
    symlinks: false,
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          prettify: false,
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
          },
        },
      },
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/foundation-sites/js'),
          resolve('node_modules/webpack-dev-server/client'),
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {url: false, sourceMap: true, importLoaders: 2},
          },
          {
            loader: 'postcss-loader',
            options: {
              // sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  grid: true,
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // data: "@import './src/styles/app';",
                // sourceMap: true,
                includePaths: ['./src/assets/scss'],
              },
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/assets/scss/app.scss'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('static'),
          to: '',
          // context: './static',
          globOptions: {
            dot: false,
          },
        },
        // ignore: ['.*'],
      ],
    }),
  ],
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  // devServer: {
  //   contentBase: 'dist',
  //   inline: true,
  //   open: true,
  // },
}
