import {test,expect} from '@playwright/test'

test("Gmail Login",async ({page}) =>{
await page.goto("https://gmail.com")
//await page.getByLabel('Email or phone').fill("java@way2automation.com")
await page.getByRole('textbox',{name:'Email or phone'}).fill("java@way2automation.com")
await page.locator('span').filter({hasText:'Next'}).click();
await page.getByLabel('Enter your password').fill('hgsdhasgdh');
await page.locator('xpath=//*[@id="passwordNext"]/div/button/span').click();
const errorMessage=await page.locator('//*[@id="c0"]/div[2]/span').innerText();
console.log(errorMessage)
await expect(errorMessage).toContain('Wrong password');
})