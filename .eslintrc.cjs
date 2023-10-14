/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    "@antfu",
  ],
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  }
}
