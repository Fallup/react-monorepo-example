const path = require('path');

const extraNodeModules = new Proxy(
  {
    // If we would have an actual package with "package.json" it would go here.
    // e.g. if @monorepo-example-local/core would be a package:
    // '@monorepo-example-local/core': path.resolve(__dirname, '../../local-packages/core/'),
  },
  {
    get: (target, name) => {
      if (target.hasOwnProperty(name)) {
        return target[name];
      }
      return path.join(process.cwd(), `node_modules/${name}`);
    },
  },
);

const watchFolders = [
  path.resolve(__dirname, '../../local-packages'),
  path.resolve(__dirname, '../../node_modules'),
];

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-typescript-transformer',
    ),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    sourceExts: ['ts', 'tsx', 'js', 'jsx'],
  },
  watchFolders,
};
