import { test, expect } from '@playwright/test'

test('Auto Suggestion Handling', async function ({ page }) {
    
    await page.goto('https://www.google.com/')

    await page.locator("//textarea[@class='gLFyf']").type("iphone");
    await page.waitForTimeout(5000)
    await page.keyboard.press("ArrowDown",{delay:400})
    await page.keyboard.press("ArrowDown",{delay:400})
    await page.keyboard.press("ArrowDown",{delay:400})
    await page.keyboard.press("ArrowDown",{delay:400})
    await page.waitForTimeout(5000)

})