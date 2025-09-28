import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator("#submit");
  }

  async navigateToLoginPage(url: string): Promise<void> {
    await this.page.goto(url);
  }
  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }
  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }
  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async login(url: string, username: string, password: string): Promise<void> {
    await this.navigateToLoginPage(url);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }
}
