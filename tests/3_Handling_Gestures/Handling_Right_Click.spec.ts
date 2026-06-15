import test from "@playwright/test";

test("Handle Right Click", async ({ page }) => {
    await page.goto("https://deluxe-menu.com/popup-mode-sample.html");
    await page.locator('//p[2]/img').click({button:'right'})
});