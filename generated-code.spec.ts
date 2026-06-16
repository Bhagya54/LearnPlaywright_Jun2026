import { test } from '@playwright/test';

test('Registration form test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  await page.fill('input[placeholder="First Name"]', 'firstname1');
  await page.fill('input[placeholder="Last Name"]', 'lastname1');
  await page.fill('textarea[ng-model="Adress"]', 'hyderabad');
  await page.fill('input[type="email"]', 'firstname.lastname@gmail.com');
  await page.check('input[value="Male"]');
});
