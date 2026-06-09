import { test, expect } from '@playwright/test'

test("Handle Resizable Element", async ({ page }) => {
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    const src = await page.locator('div#draggable');
    const dest = await page.locator('div#droppable');

    const bbSource = await src.boundingBox();
    const bbDest = await dest.boundingBox();

    if (bbSource && bbDest) {
        await page.mouse.move(
            bbSource.x + bbSource.width / 2,
            bbSource.y + bbSource.height / 2
        )
        await page.mouse.down();
        await page.mouse.move(
            bbDest.x + bbDest.width / 2,
            bbDest.y + bbDest.height / 2
        )
        await page.mouse.up();
    }

    const droppedText = await page.locator('div#droppable>p').innerText();
    console.log(droppedText)
    await expect(droppedText).toBe('Dropped!')


});