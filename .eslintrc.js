module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        'browser': true,
        'jest': true
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
        'react/jsx-one-expression-per-line': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error'],
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
