import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async getBalance(): Promise<string> {
    return this.page.getByTestId('balance-amount').innerText();
  }

  async getWelcomeText(): Promise<string> {
    return this.page.getByTestId('balance-greeting').innerText();
  }

  async goToCheckout(): Promise<void> {
    await this.page.getByRole('link', { name: 'Payer en 3x/4x' }).click();
  }

  async goToTransactions(): Promise<void> {
    await this.page.getByRole('link', { name: 'Transactions' }).click();
  }
}
