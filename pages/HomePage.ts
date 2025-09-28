import { Page, Locator, expect } from "@playwright/test";
export class HomePage {
  private readonly page: Page;
  readonly welcomeMessage: Locator;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator("p>strong");
    this.logoutButton = page.locator('text="Log out"');
  }

  async clickLogout(): Promise<void> {
    await this.logoutButton.click();
  }
}
