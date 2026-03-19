import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Authentication', () => {
  test('should display the login form on initial load', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await expect(page.getByRole('heading', { name: 'Connexion' })).toBeVisible();
    await expect(page.getByLabel('Adresse email')).toBeVisible();
    await expect(page.getByLabel('Mot de passe')).toBeVisible();
  });

  test('should redirect to dashboard after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginAs('angelica@newwaypay.fr', 'demo1234');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', { name: 'Mon espace' })).toBeVisible();
  });

  test('should show an error with wrong credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginAs('wrong@email.fr', 'wrongpassword');

    await expect(page).not.toHaveURL(/dashboard/);
  });

  test('should log out and redirect to login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginAs('angelica@newwaypay.fr', 'demo1234');

    await page.getByRole('button', { name: 'Déconnexion' }).click();

    await expect(page).toHaveURL(/login/);
  });
});
