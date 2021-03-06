module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'eol-last': 'off',
    indent: ['warning', 4],
    'no-unused-vars': 'warning',
    semi: 'warning',
    'space-before-function-paren': 'off'
  }
}
