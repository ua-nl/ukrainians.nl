/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          ['parent', 'sibling'],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['*.{js,ts}'],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      files: ['**/*.test.{js,ts,tsx}'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
    },
  ],
};
