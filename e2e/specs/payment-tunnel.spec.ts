import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Payment tunnel', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginAs('angelica@newwaypay.fr', 'demo1234');
    await page.getByRole('link', { name: 'Payer en 3x/4x' }).click();
  });

  test('should display the cart summary on step 1', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Récapitulatif du panier' })).toBeVisible();
  });

  test('should navigate to plan selection on step 2', async ({ page }) => {
    await page.getByRole('button', { name: 'Choisir mon plan' }).click();

    await expect(page.getByRole('heading', { name: 'Choisir votre plan de paiement' })).toBeVisible();
  });

  test('should complete the full payment tunnel', async ({ page }) => {
    await page.getByRole('button', { name: 'Choisir mon plan' }).click();
    await page.getByRole('button', { name: 'Saisir ma carte' }).click();

    await page.getByLabel('Titulaire de la carte').fill('Angelica Lazaro');
    await page.getByLabel('Numéro de carte').fill('4242 4242 4242 4242');
    await page.getByLabel("Date d'expiration").fill('12/26');
    await page.getByLabel('CVC').fill('123');

    await page.getByRole('button', { name: /Valider le paiement/ }).click();

    await expect(page.getByRole('heading', { name: 'Paiement confirmé !' })).toBeVisible();
  });
});
