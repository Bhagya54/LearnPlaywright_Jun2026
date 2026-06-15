import { test, expect } from '@playwright/test'
test("Handle Checkboxes", async ({ page }) => {
    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
    await expect(page).toHaveURL("http://www.tizag.com/htmlT/htmlcheckboxes.php")
    console.log("URL assertion is pass")
    await expect(page).not.toHaveURL(/error/)
    console.log("URL does not have any error")
    //await expect(page.title).toContain("Checkboxes")
    await expect(page).toHaveTitle("HTML Tutorial - Checkboxes")
    console.log("Title is passed")
    const text = await page.getByText('HTML Checkbox Code:')
    await expect(text).toHaveText('HTML Checkbox Code:')
    const checkbox = await page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]/input[1]')
    await expect(checkbox).toBeVisible();

    await checkbox.check()
    await expect(checkbox).toBeChecked();

    await expect(checkbox).toHaveAttribute('value', 'soc3cer')
    console.log("Attribute value matched")

});