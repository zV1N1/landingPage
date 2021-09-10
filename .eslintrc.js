module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    'require-jsdoc': 0,
    indent: 'off',
    'quote-props': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'object-curly-spacing': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
