module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  ignorefiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
  },
};
