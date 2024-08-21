import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
      prettier,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:storybook/recommended',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'off',
      'react/display-name': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'max-len': ['error', { ignoreComments: true, code: 125 }],
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-param-reassign': 'off',
      'no-undef': 'off',
      'react/no-array-index-key': 'off',
      'arrow-body-style': 'off',
      'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
      'react/no-unstable-nested-components': 'warn',
    },
  },
  {
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'max-len': 'off',
    },
  },
];
