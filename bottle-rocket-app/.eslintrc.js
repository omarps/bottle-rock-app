module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': false,
      },
    ],
  },
};
