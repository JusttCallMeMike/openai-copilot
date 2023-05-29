/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:n/recommended',
    'plugin:security/recommended',
    'plugin:etc/recommended',
    'plugin:@microsoft/sdl/recommended',
    'plugin:unicorn/recommended',
    'plugin:putout/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'n',
    'unicorn',
    'etc',
    '@microsoft/eslint-plugin-sdl',
    'putout',
    'import',
  ],
  
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow'},
      {
        format: ['camelCase', 'UPPER_CASE'],
        selector: ['variable', 'typeAlias', 'typeParameter'],
        leadingUnderscore: 'allow',
      },
    ],
    
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        vars: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/semi': 'off',
    'no-extra-semi': 'error',
    semi: ['warn', 'never'],
    indent: ['error', 2],
    '@typescript-eslint/no-explicit-any': 'error',
    
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    'id-length': ['error', {exceptions: ['i', 'j']}],
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-redeclare': [
      'off',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    'sonarjs/prefer-immediate-return': 'off',
    'unicorn/new-for-builtins': 'off',
    'unicorn/throw-new-error': 'off',
    curly: ['error', 'all'],
    'security/detect-object-injection': 'off',
    '@typescript-eslint/ban-types': 'error',
    'import/no-unresolved': 'error',
    'quote-props': ['error', 'as-needed'],
    'prettier/prettier': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  ignorePatterns: [
    'out',
    'dist',
    '**/*.d.ts',
    '**/*.js',
    '**/json-config-autogen/*',
    // '.eslintrc.cjs',
    '*.json',
  ],
}
