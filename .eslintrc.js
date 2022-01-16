module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'react-app',
    'react-app/jest',

    'plugin:react/recommended',
    'eslint:recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': ['error', 2],
    'no-unused-vars': ['error', {'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false}],
  },
};
