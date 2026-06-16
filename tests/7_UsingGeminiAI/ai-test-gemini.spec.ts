import { test, expect } from '@playwright/test'
import { generatePlaywrightSteps } from './gemini-helper'
import fs from 'fs'

test('Gemini Testcase', async ({ page }) => {
    const task = `
    1.Navigate to the url: https://demo.automationtesting.in/Register.html
    2.Enter first name as "firstname1"
    3.Enter last name as "lastname1"
    4.Enter address as "hyderabad"
    5.Enter email address as "firstname.lastname@gmail.com"
    6.Select male as the gender
    `

    const code = await generatePlaywrightSteps(task)
    await fs.promises.writeFile('./tests/7_UsingGeminiAI/generatedcode.spec.ts', code, 'utf8')

})