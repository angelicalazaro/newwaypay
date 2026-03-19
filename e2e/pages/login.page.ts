import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async fillEmail(email: string): Promise<void> {
    await this.page.getByLabel('Adresse email').fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.page.getByLabel('Mot de passe').fill(password);
  }

  async submit(): Promise<void> {
    await this.page.getByRole('button', { name: 'Se connecter' }).click();
  }

  async loginAs(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }
}
