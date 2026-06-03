import { test, expect } from '@playwright/test'
//const page = new Page
test("First Playwright Test", async ({ page }) => {
    await page.goto("https://google.com")
    let title = await page.title();
    expect(title).toContain('Google')
})

test("Navigate Methods", async ({ page }) => {
    await page.goto("https://google.com")
    let title = await page.title();
    console.log("First Page: ", title)

    await page.goto("https://gmail.com")
    let gmailTitle=await page.title();
    console.log("Second Page: ", gmailTitle)
    expect(gmailTitle).toContain("Gmail")
    expect(gmailTitle).toBe("Gmail: Secure, AI-Powered Email for Everyone | Google Workspace")


    await page.goBack();//google
    await page.goForward();//gmail

    await page.reload();
})

/*
Cooks noodle 
1. Boil water - 
2. Noodle inside water
3. Cook and eat

*/