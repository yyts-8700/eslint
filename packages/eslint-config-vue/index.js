module.exports = {
  extends: ["plugin:vue-libs/recommended"],
  plugins: ["import"],
  rules: {
    "space-before-function-paren": "off",
    "comma-dangle": ["error", "always-multiline"],
    "import/order": "error",
    "vue/html-quotes": ["error", "single"],
  },
}

