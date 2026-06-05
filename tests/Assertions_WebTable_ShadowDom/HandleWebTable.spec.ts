import { test, expect } from '@playwright/test'
test("Handle WebTable", async ({ page }) => {
    await page.goto("https://money.rediff.com/indices/nse/nifty-50");

    const rowCount = await page.locator('.dataTable>tbody>tr').count();
    const colCount = await page.locator('.dataTable>tbody>tr:first-child>td').count();

    console.log(rowCount + " " + colCount)

    const firstRowFirstCol = await page.locator('.dataTable>tbody>tr:first-child>td:first-child')
    await expect(firstRowFirstCol).toHaveText('Adani Enterprises')


    const rowText = await page.locator('.dataTable>tbody>tr').allInnerTexts();
    for (const rowTextVal of rowText) {
        console.log(rowTextVal)
        console.log()
    }

})