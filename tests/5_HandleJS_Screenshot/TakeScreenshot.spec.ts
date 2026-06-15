import { test, expect, Page, Locator } from '@playwright/test'
import { link } from 'node:fs'


test("Take Page Screenshot", async ({ page }) => {
    //await page.goto("https://google.com")
    await page.goto("https://redbus.com")
    //await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true })
    await getPageScreenshot(page)
})


test("Take Element Screenshot", async ({ page }) => {
    //await page.goto("https://google.com")
    await page.goto("https://redbus.com")
    const thingEle = await page.getByRole('link', { name: 'Things to Do ' })
    // await thingEle.screenshot({ path: 'screenshots/element_1.png' })
    await getElementScreenshot(thingEle)
})

async function getPageScreenshot(page: Page) {
    const date = new Date();
    const fileName = date.toISOString().replace(/[.:-]/g, '_') + '.png'
    //console.log(fileName)//2026-06-15T08:14:24.851Z
    await page.screenshot({ path: `screenshots/${fileName}`, fullPage: true })
}

async function getElementScreenshot(ele: Locator) {
    const date = new Date();
    const fileName = 'Element_' + date.toISOString().replace(/[.:-]/g, '_') + '.png';
    //console.log(fileName)//2026-06-15T08:14:24.851Z
    await ele.screenshot({ path: `screenshots/${fileName}` });
}


