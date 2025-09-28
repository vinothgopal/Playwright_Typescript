# 🎭 Playwright Automation (TypeScript)

This repository contains an automated test framework using [Playwright](https://playwright.dev/) with **TypeScript**. It supports test tagging (`@sanity`, `@regression`), code formatting, linting, Git hooks with Husky, secure environment file handling, Docker support, and CI/CD integration with Jenkins.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

This sets up:

- Playwright with TypeScript support
- Prettier for code formatting
- ESLint for linting TypeScript code
- Husky for Git hooks
- lint-staged for pre-commit formatting and linting

---

## 🧪 Running Test Cases

### ▶ Run All Tests (Headed or Headless)

```bash
npm run regression
```

### ✅ Run Sanity Suite

```bash
npm run sanity
```

This runs only tests tagged with `@sanity`:

```typescript
test("Login test @sanity", async ({ page }) => {
  // test code here
});
```

### 🧼 Format Code

```bash
npm run format
```

Formats `.ts`, `.json`, and related files using Prettier.

---

## 🧹 Pre-commit Hooks

Husky is configured to automatically run `lint-staged` before each commit, which includes:

- Fixing lint errors with ESLint (TypeScript-aware)
- Formatting with Prettier

### To install Husky hooks after `npm install`:

```bash
npm run prepare
```

### Lint-Staged Configuration (from `package.json`):

```json
"lint-staged": {
  "*.{ts,tsx,js,json}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

---

## 🔐 Encrypt & Decrypt Environment Files

Sensitive environment variables (like API keys, tokens, passwords) are encrypted/decrypted securely using `sops`.

### 🔒 Encrypt `.env` File

```bash
make encrypt filename=.ci/creds-pool/test-stg.env
```

### 🔓 Decrypt `.env` File

```bash
make decrypt filename=.ci/creds-pool/test-stg.env
```

Ensure decryption before running tests locally or in CI.

---

## 🐳 Running with Docker

### 📄 1. Build Docker Image

```bash
docker build -t playwright-tests .
```

### ▶️ 2. Run Tests in Docker (headless)

```bash
docker run --rm playwright-tests
```

### ✅ 3. Run Tagged Tests (e.g., `@sanity`)

```bash
docker run --rm playwright-tests npx playwright test --grep @sanity
```

### 📦 4. Access Test Reports

Mount a volume to access `playwright-report` locally:

```bash
docker run --rm -v $(pwd)/playwright-report:/app/playwright-report playwright-tests
```

Then run:

```bash
npx playwright show-report
```

---

## 🤖 Continuous Integration with Jenkins

The `Jenkinsfile` in the project root supports running tests via parameters:

- **sanity**: runs only sanity tagged tests
- **regression**: runs the full regression suite

Example to trigger:

```groovy
parameters {
  choice(name: 'TEST_SUITE', choices: ['sanity', 'regression'], description: 'Choose test suite to run')
}
```

The pipeline will run tests accordingly inside Docker and publish reports.

---

## 🛠 Technologies Used

- [Playwright](https://playwright.dev/) with TypeScript
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) (TypeScript support)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Docker](https://www.docker.com/)
- [SOPS (for environment encryption)](https://github.com/mozilla/sops)
- Jenkins for CI/CD

---

## 📁 Project Structure

```
PlaywrightAutomation/
├── .ci/                    # Encrypted environment files
├── .husky/                 # Git hooks
├── pageobject/             # Page Object Model files (TypeScript)
├── tests/                  # Test specs (.ts files)
├── utils/                  # Fixtures and test data
├── Jenkinsfile             # Jenkins pipeline configuration
├── playwright.config.ts    # Playwright config (TypeScript)
├── test.config.ts          # Additional test configuration (TypeScript)
├── eslint.config.cjs       # ESLint configuration (CommonJS)
├── Makefile                # Makefile for encryption/decryption commands
├── .sops.yaml              # SOPS configuration file for env encryption
├── package.json
├── tsconfig.json           # TypeScript configuration
├── Dockerfile              # Docker configuration
└── README.md
```

---

## 🧾 Notes

- Requires Node.js v16+ (or latest LTS)
- Use `npx playwright test --help` to explore CLI options
- Use test tags (`@sanity`, `@regression`) to filter tests dynamically
- Docker must be installed to run tests inside containers
- Jenkins pipeline is parameterized for flexibility in CI

---

## 🧵 Author

Developed by [Vinoth Gopal](https://github.com/vinothgopal)
