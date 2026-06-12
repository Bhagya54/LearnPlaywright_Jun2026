import { test, expect } from '@playwright/test'

test("Handling JS Execution - Highlight", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit")
    const frame1 = await page.frameLocator('#iframeResult')
    const submitBtn = await frame1.locator("xpath=//input[@type='submit']");
    await submitBtn.evaluate((ele: HTMLElement) => {
        ele.style.border = '3px solid red'
        ele.style.background = 'yellow'
    })
});

test("Handling JS Execution - Scroll To a element", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp")
    const tableRow = await page.locator('#customers>tbody>tr:last-child')
    await tableRow.evaluate((ele: HTMLElement) => {
        ele.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
})




