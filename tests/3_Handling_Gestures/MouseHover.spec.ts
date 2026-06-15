import { test, expect } from '@playwright/test'
test("Handle Mouse Over", async ({ page }) => {
    await page.goto("https://www.carwale.com/");
    await page.locator("//div[text()='NEW CARS']").hover();
    await page.locator("//div[text()='Find New Cars']").click();

    await expect(page).toHaveURL("https://www.carwale.com/new-cars/")
    await expect(page).toHaveTitle("New Cars in India 2026 | New Car Information | Best New Cars - CarWale");

    // const url = await page.url();
    // await expect(url).toContain("new-cars")

});


