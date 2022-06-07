/**
 * @type {import('eslint').Linter.Config}
 */
 module.exports = {
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },



  extends: [require.resolve('config/eslintrc'),    'plugin:@next/next/recommended',
],
};
