// lint-staged.config.js
module.exports = {
  "**/*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.{js,json,md,yml,yaml}": ["prettier --write"],
};
