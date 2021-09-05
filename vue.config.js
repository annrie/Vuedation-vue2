module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    disableHostCehck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
    ;(config.performance = {
      hints: 'warning',
      //Maximum volume at the start of the entrance
      maxEntrypointSize: 1000 * 500,
      //Maximum volume of generated file
      maxAssetSize: 1000 * 1000,
      //Only the performance prompt of js file is given
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      },
    }),
      config.module
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      // .rule("vue")
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
  },
}
