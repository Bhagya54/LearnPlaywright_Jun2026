import { test, expect } from '@playwright/test'


test("Handling links", async ({ page }) => {
await page.goto("https://www.wikipedia.org/")
const block=await page.getByLabel('Other projects');


const allLinks=await block.locator('a').all();
console.log(allLinks.length)//12
for(const links of allLinks){
    const text=await links.innerText();
    const href=await links.getAttribute('href')
    console.log(`text: ${text} - href: ${href}`)
}

});