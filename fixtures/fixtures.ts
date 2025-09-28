import { test as base, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  config: TestConfig;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  config: async ({}, use) => {
    await use(new TestConfig());
  },
});

export { expect };
