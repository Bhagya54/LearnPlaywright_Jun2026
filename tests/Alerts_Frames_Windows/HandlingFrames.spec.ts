import { test, expect } from '@playwright/test'
test("Handling Frames", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit")
    const frame1 = await page.frameLocator('#iframeResult')
    await frame1.locator('#fname').fill('')
    await frame1.locator('#fname').fill('Vinod')
    await frame1.locator('#lname').fill('')
    await frame1.locator('#lname').fill('Sharma')
    await frame1.locator("xpath=//input[@type='submit']").click();


});