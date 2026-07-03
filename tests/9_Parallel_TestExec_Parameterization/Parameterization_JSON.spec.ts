import { test, expect } from '@playwright/test'; 
import testData from '../../data/testData.json';
test('test', async ({ page }) => {
  for(const data of testData){
  await page.goto('https://demo.automationtesting.in/Register.html#google_vignette');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.locator('textarea').click();
  await page.locator('textarea').fill('hyderabad');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('bhagya.kudupudi@gmail.com');
  await page.locator('input[type="tel"]').click();
  await page.locator('input[type="tel"]').fill(data.phoneNo);
  await page.getByRole('radio', { name: 'FeMale' }).check();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox3').check();
  await page.locator('#msdd').click();
  await page.getByText('English').click();
  await page.locator('#msdd').click();
  await page.getByText('Skills', { exact: true }).click();
  await page.locator('#Skills').selectOption('C');
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('treeitem', { name: 'India' }).click();
  await page.locator('#yearbox').selectOption('1930');
  await page.locator('div').filter({ hasText: 'Day 1 2 3 4 5 6 7 8 9 10 11' }).nth(4).click();
  await page.getByRole('combobox').nth(4).selectOption('October');
  await page.locator('#daybox').selectOption('13');
  await page.locator('#firstpassword').click();
  await page.locator('#firstpassword').fill('hello123');
  await page.locator('#secondpassword').click();
  await page.locator('#secondpassword').fill('hello123');
  
  }
  
  
  
  
  
  
  
});