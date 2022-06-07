/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve('config/eslintrc-react'),
    require.resolve('config/eslintrc'),
  ],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
