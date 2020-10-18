module.exports = {
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },
  // config.module
  //     const svgRule = config.module.rule( 'svg' )
  //       svgRule.uses.clear()
  //       svgRule
  //       // .rule("vue")
  //         .use("vue-svg-inline-loader")
  //           .loader("vue-svg-inline-loader"),
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
