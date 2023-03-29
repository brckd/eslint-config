import { ESLint } from "eslint";

const config: ESLint.ConfigData = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/strict", "prettier"],
  rules: {
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/prefer-literal-enum-member": "off",
  },
  root: true,
};

module.exports = config;
