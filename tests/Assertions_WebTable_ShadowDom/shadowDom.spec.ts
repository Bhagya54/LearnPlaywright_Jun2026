import { test, expect } from '@playwright/test'
test("Handle Checkboxes", async ({ page }) => {
    await page.goto("chrome://downloads/");
    await page.locator('#searchInput').fill('playwright')
    
});