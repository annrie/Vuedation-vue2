module.exports = {
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Foundation: true,
    whatInput: true,
    $: true,
    _: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  // plugins: ["vue"],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    // '@vue/typescript/recommended',
    '@vue/prettier',
    // 'prettier',
    // 'prettier/vue'
    // '@vue/prettier/@typescript-eslint',
  ],
  // required to lint *.vue files
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': ['.(scss | less | css)$'],
  },
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // // タグの最後で改行しないで
    'vue/html-closing-bracket-newline': [0, {multiline: 'never', singleline: 'never'}],
    // 'vue/html-indent': 'off',
    // 'vue/valid-v-on': 1,
    'vue/html-self-closing': 0,
    'vue/one-component-per-file': 0,
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        baseIndent: 1,
      },
    ],
  },
}
