import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('tina');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('sharma');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('hyderabad');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('tina.sharma@gmail.com');
  await page.locator('input[type="tel"]').click();
  await page.locator('input[type="tel"]').fill('8989083');
  await page.getByText('FeMale').click();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox2').check();
  await page.locator('#msdd').click();
  await page.getByText('English').click();
});