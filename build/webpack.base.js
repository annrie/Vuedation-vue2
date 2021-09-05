'use strict'

const path = require('path')
const paths = require('./paths')
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
// const isProductionMode = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // mode: isProductionMode ? 'production' : 'development',
  context: resolve(''),
  entry: {
    app: './src/main.js',
    style: './src/assets/scss/app.scss',
    // Runtime code for hot module replacement
    // hot: 'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  output: {
    path: resolve('dist'),
    // path: resolve('dist'),
    filename: devMode ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    chunkFilename: devMode ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    assetModuleFilename: 'img/[hash][ext]',
    publicPath: 'auto',
    clean: true,
  },
  // devtool: 'inline-source-map', // ブラウザでのデバッグ用にソースマップを出力する
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.css'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      assets: path.resolve(__dirname, '../src/assets/'),
      '@': resolve('src'),
      zf: 'foundation-sites/js',
    },
    symlinks: false,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    chunkIds: 'named',
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all',
      // minSize: 30000,
      // minRemainingSize: 0,
      // maxSize: 0,
      // minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        default: false,
        // common: {
        //   name: 'common',
        //   chunks: 'initial',
        //   minChunks: 2,
        // },
        defaultVendor: false,
        // name: 'vendor',
        // test: /[\\/]node_modules[\\/]/,
        // chunks: 'all',
        // },
      },
    },
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //   },
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', //<style lang="sass">
          },
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
        loader: 'babel-loader',
        options: {
          presets: [
            // プリセットを指定することで、ES2020 を ES5 に変換
            '@babel/preset-env',
          ],
        },
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
          // isProductionMode ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {url: false, sourceMap: true, importLoaders: 2},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: [
                  require('postcss-preset-env'),
                  require('postcss-import'),
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // data: "@import './src/styles/app';",
                // sourceMap: true,
                fiber: require('fibers'),
                implementation: require.resolve('sass'),
                includePaths: ['./src/assets/scss'],
                outputStyle: 'compressed',
              },
              sourceMap: true,
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
        loader: 'file-loader',
        options: {
          // limit: 10000,
          // name: './img/[name].[contenthash:7].[ext]',
          type: 'asset/resource',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[contenthash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[contenthash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: 'css/[name].css',
      filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash].css',
      // chunkFilename: 'css/[id].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
    // {
    //   from: path.resolve(__dirname, '../static'),
    //   to: '',
    //   ignore: ['.*'],
    // },
    // ]),
    // new StyleLintPlugin({
    //   files: STYLELINT,
    //   syntax: 'scss',
    //   // fix: true
    // })
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  target: ['web', 'es5'],
}
