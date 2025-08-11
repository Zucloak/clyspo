module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "solid"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/recommended",
  ],
  rules: {
    // I don't like this rule
    "@typescript-eslint/no-explicit-any": "off",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
