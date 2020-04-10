module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
      'browser': true,
      'jest': true,
  },
  plugins: [
      '@typescript-eslint',
  ],
  extends: [
    '../../.eslintrc.js',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/no-unresolved': [
      'error',
      { 'ignore': ['^react$', '^styled-components$'] }
    ]
  }
};