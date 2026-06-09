import { test, expect } from '@playwright/test'
test("Handle Slides", async ({ page }) => {
    await page.goto("https://jqueryui.com/resources/demos/slider/default.html");

    const slider = await page.locator("//div[@id='slider']/span")
    const boundingbox = await slider.boundingBox();


    if (boundingbox) {
        const startX = boundingbox.x + boundingbox.width / 2;
        const startY = boundingbox.y + boundingbox.height / 2;

        await page.mouse.move(startX, startY)
        await page.mouse.down()
        await page.mouse.move(startX + 400, startY)
        await page.mouse.up()
    }
});

test("Handle Resizable Element", async ({ page }) => {
    await page.goto("https://jqueryui.com/resources/demos/resizable/default.html");


    const resizableEle = await page.locator("#resizable>div:last-child")
    const boundingbox = await resizableEle.boundingBox();




    if (boundingbox) {
        const startX = boundingbox.x + boundingbox.width / 2;
        const startY = boundingbox.y + boundingbox.height / 2;


        await page.mouse.move(startX, startY)
        await page.mouse.down()
        await page.waitForTimeout(2000)
        await page.mouse.move(startX + 400, startY + 500)
        await page.mouse.up()
    }

});

