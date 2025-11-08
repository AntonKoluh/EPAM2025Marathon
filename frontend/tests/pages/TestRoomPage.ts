import type { Page, Locator } from 'playwright';
import { BasePage } from './BasePage.ts';

export class LoginPage extends BasePage {
  readonly bin: Locator;

  constructor(page: Page) {
    super(page);
    this.bin = page.getByTestId('bin-icon-test-delete');
  }

  async open(baseUrl: string) {
    await this.page.goto(`${baseUrl}/en1SAp/dhkaHC`);
  }

  async delete() {
    await this.bin.click();
  }
}
