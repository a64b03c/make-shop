module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // eslint
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-var": "error",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "no-unexpected-multiline": "error",
    "no-useless-escape": "off",

    // eslint-plugin-vue
    "vue/multi-word-component-names": "off",
    "vue/script-setup-uses-vars": "error",
    "vue/no-mutating-props": "off",
  },
};
