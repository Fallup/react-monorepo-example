module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const { absolutePaths, outsidePaths } = pluginOptions
    const moduleScopePlugin = webpackConfig.resolve.plugins.find(
      plugin => plugin.appSrcs && plugin.allowedFiles,
    )

    // Modifying ModuleScopePlugin to allow imports from outside the "src" directory
    if (moduleScopePlugin) {
      outsidePaths.forEach(path => moduleScopePlugin.appSrcs.push(path))
    }

    // Webpack aliases to be able to use the absolute paths
    webpackConfig.resolve.alias = Object.assign(
      webpackConfig.resolve.alias,
      absolutePaths.reduce((acc, curr) => {
        acc[curr.alias] = curr.path
        return acc
      }, {}),
    )

    return webpackConfig
  },
}
