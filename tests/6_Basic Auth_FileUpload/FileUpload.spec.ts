import { test, expect, Page, Locator } from '@playwright/test'

test("Single File Upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("input#file-upload").setInputFiles("C:\\Users\\91733\\Downloads\\WebDriverHierarchy.png")

})



test("Multiple File Upload", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    await page.locator("input#input-4").setInputFiles(["C:\\Users\\91733\\Downloads\\WebDriverHierarchy.png", "C:\\Users\\91733\\Downloads\\WebDriverHierarchy (1).png"])
})