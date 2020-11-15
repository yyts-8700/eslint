module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    fetch: false,
    window: false,
    DEBUG: false,
  },
  rules: {
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    "object-property-newline": "error",
    'padding-line-between-statements': [
      'error',
      { blankLine: "always", prev: "*", next: "return" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      }
    ],
    'arrow-parens': ["error", "as-needed"],
    'import/order': ["error", {"newlines-between": "never"}]
  },
}
