import { test, expect } from '@playwright/test'
test("Handling Alerts", async ({ page }) => {

    await page.on('dialog', async alert => {
        await page.waitForTimeout(2000)
        console.log(await alert.message());
        await alert.accept();
    })
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")
    await page.getByRole('button', { name: 'Log In' }).click();

})