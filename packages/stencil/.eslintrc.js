module.exports = {
  extends: ['../../.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-unused-vars': ["error", { "varsIgnorePattern": "h" }],
    'react/button-has-type': 'off',
    'react/no-unknown-property': 'off'
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ]
}
