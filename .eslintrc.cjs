module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    withDefaults: true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['401', '404', 'index', 'default'],
      },
    ],
  },
}
