// eslint.config.cjs
const pluginPrettier = require("eslint-plugin-prettier");
const pluginNoOnlyTests = require("eslint-plugin-no-only-tests");
const parserTypeScript = require("@typescript-eslint/parser");

/** @type {import("eslint").FlatConfig.ConfigArray} */
module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: parserTypeScript,
      sourceType: "module",
    },
    plugins: {
      prettier: pluginPrettier,
      "no-only-tests": pluginNoOnlyTests,
    },
    rules: {
      "no-only-tests/no-only-tests": "error",
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  {
    ignores: ["dist", "node_modules", "playwright-report", "eslint.config.ts"],
  },
];
