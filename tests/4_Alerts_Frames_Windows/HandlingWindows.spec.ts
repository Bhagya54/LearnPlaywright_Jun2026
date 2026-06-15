import { test, expect } from '@playwright/test'
test("Handling Frames", async ({ page }) => {
    await page.goto("https://deluxe-menu.com/popup-mode-sample.html")
    await page.locator('//p[2]/img').click({ button: 'right' })
    await page.locator('#dm2m1i1tdT').hover();
    await page.locator('#dm2m2i1tdT').hover();
    
    const [page1]=await Promise.all([page.waitForEvent('popup'),await page.locator('#dm2m3i1tdT').click()]);
    
    await page1.waitForLoadState();
    await page1.waitForTimeout(3000);
    console.log(await page1.title());

    await page1.close()
    await page.waitForTimeout(3000);
    await page.close()


});