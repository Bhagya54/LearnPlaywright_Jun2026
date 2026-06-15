import { test, expect } from '@playwright/test'


test("Basic Auth", async ({ browser }) => {
//page - default browser setup,page
//browser - custom setup browser - credentials/permission/cookies.. - incognito mode(cookie/bookmark)
//browser> open page

/*
JS Object
{
empid : 123
empname: "bhagya"
}
*/

const browserContext = await browser.newContext(
    {
    httpCredentials:{
        username:"admin",
        password:"admin"
    }
    }    
)

const page1=await browserContext.newPage();
await page1.goto("https://the-internet.herokuapp.com/basic_auth");
const successMessage=await page1.locator(".example>p").innerText();
console.log(successMessage)
await expect(successMessage).toContain("Congratulations")


});