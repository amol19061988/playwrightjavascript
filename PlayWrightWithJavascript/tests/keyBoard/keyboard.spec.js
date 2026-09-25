import { test, expect } from '@playwright/test'

test('Keboard Handle', async function ({ page }) {
    let testcaseNo = 'TC101'
await page.goto('https://testautomationpractice.blogspot.com/')

//focus () method is used to focus the element
await page.locator("//input[@id='name']").focus();
//Delay we can use to  delay after single character some time
await page.keyboard.type("Test user 123",{delay:500})

for (let i=0;i<=7;i++)
{
await page.keyboard.press('Backspace',{delay:500});
//await page.waitForTimeout(400)
}
await page.waitForTimeout(5000);




})