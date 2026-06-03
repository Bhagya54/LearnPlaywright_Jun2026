import { test, expect } from '@playwright/test'

test("Handling dropdowns", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/")
    await page.selectOption('#searchLanguage', { value: 'et' })
    await page.waitForTimeout(2000);
    await page.selectOption('#searchLanguage', { label: 'Deutsch' })
    await page.waitForTimeout(2000);
    await page.selectOption('#searchLanguage', { index: 10 })


    const allOptions = await page.locator('option').all()
    console.log("No of options are: " + allOptions.length)//77

    for (const option of allOptions) {
        const optionTxt = await option.innerText();
        const valueAttribute = await option.getAttribute('value')
        const langAttribute = await option.getAttribute('lang')

        console.log(`text: ${optionTxt} - lang: ${langAttribute} `)
    }

})