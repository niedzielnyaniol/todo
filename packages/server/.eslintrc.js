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
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'class-methods-use-this': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': 'h' }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
  }
};
