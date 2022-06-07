/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  settings: {
    next: {
      rootDir: 'packages/web/',
    },
  },
  extends: [
    require.resolve('config/eslintrc'),
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
