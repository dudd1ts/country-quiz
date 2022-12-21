/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    'comma-dangle': ['off', 'never'],
    'vue/multi-word-component-names': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true
  }
};