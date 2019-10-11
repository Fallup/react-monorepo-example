const path = require('path');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
          alias: {
            '@monorepo-example-local/core': path.resolve(
              __dirname,
              '../../local-packages/core/src/',
            ),
            '@monorepo-example-local/types': path.resolve(
              __dirname,
              '../../local-packages/types/src/',
            ),
            '@monorepo-example-local/theme': path.resolve(
              __dirname,
              '../../local-packages/theme/src/',
            ),
          },
        },
      ],
    ],
  };
};
