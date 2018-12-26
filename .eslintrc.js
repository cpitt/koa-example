module.exports = {
  extends: [ "airbnb-base" , "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", {singleQuote: true, trailingComma: 'all' }]
  }
};
