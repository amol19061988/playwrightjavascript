import { test, expect } from '@playwright/test'

test('Keboard Handle dropdown', async function ({ page }) {
    let testcaseNo = 'TC101'
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//select[@id='country']").focus();
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowDown',{delay:500})
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown',{delay:500})
    await page.waitForTimeout(5000)

})