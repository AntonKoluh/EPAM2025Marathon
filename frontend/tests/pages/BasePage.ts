import type { Page, Locator } from 'playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  byTestId(id: string): Locator {
    return this.page.getByTestId(id);
  }
}
