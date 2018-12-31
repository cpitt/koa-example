module.exports = {
  extends: [ "airbnb-base" , "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", {singleQuote: true, trailingComma: 'all' }],
    "no-underscore-dangle": ["error", {allow: ['__get__', '__set__']}]
  },
  env: {
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  }
};
