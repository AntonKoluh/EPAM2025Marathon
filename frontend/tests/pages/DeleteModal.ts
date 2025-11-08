import { BasePage } from './BasePage.ts';

export class DeleteModal extends BasePage {
  async expectVisible() {
    const modal = this.page.getByRole('dialog', { name: /Are you absolutely sure?/i });
    await modal.waitFor({ state: 'visible' });

    await this.page.getByText(`Are you absolutely sure?`).waitFor({
      state: 'visible',
    });
  }

  async close() {
    await this.page.getByRole('button', { name: /Cancel/i }).click();
  }

  async confirm() {
    await this.page.getByRole('button', { name: /Remove/i }).click();
  }
}