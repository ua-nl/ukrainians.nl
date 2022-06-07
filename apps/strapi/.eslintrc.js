/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [require.resolve('config/eslintrc')],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
};
