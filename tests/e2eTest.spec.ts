import { test, expect } from "../fixtures/fixtures";

test("Login and Logout Test", { tag: "@sanity" }, async ({ loginPage, homePage, config }) => {
  await loginPage.login(config.appUrl, config.username, config.password);
  await expect(homePage).toBeDefined();
  await expect(homePage.welcomeMessage).toHaveText("Congratulations student. You successfully logged in!");
  await homePage.clickLogout();
});
