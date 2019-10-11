const path = require('path')
const rewireBabelLoader = require('craco-babel-loader')

const configWebpackAbsolutePaths = require('./craco-override-webpack')

module.exports = {
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        includes: [path.resolve(__dirname, '../../local-packages/')],
        excludes: [/(node_modules)/],
      },
    },
    {
      plugin: configWebpackAbsolutePaths,
      options: {
        outsidePaths: [path.resolve(__dirname, '../../local-packages/')],
        absolutePaths: [
          { alias: 'src', path: path.resolve(__dirname, 'src/') },
          { alias: 'components', path: path.resolve(__dirname, 'src/components/') },
          {
            alias: '@monorepo-example-local/core',
            path: path.resolve(__dirname, '../../local-packages/core/src/'),
          },
          {
            alias: '@monorepo-example-local/types',
            path: path.resolve(__dirname, '../../local-packages/types/src/'),
          },
          {
            alias: '@monorepo-example-local/theme',
            path: path.resolve(__dirname, '../../local-packages/theme/src/'),
          },
        ],
      },
    },
  ],
}
