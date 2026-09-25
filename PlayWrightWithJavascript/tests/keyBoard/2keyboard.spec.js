import { test, expect } from '@playwright/test'

test('Keboard Handle', async function ({ page }) {
    let testcaseNo = 'TC101'
    await page.goto('https://testautomationpractice.blogspot.com/')

    //focus () method is used to focus the element
    await page.locator("//input[@id='name']").focus();
    await page.keyboard.type("Test user 123", { delay: 500 })

    //TO select the entered text
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Tab')
    await page.locator("//input[@id='email']");
    await page.keyboard.type("tester@gmail.com", { delay: 500 })


    // shift 
    await page.keyboard.down('Shift')
    await page.keyboard.press('ArrowLeft', { delay: 500 })
    await page.keyboard.press('ArrowLeft', { delay: 500 })
    await page.keyboard.press('ArrowLeft', { delay: 500 })
    // to release the shift button
    await page.keyboard.up('Shift')


    await page.waitForTimeout(5000);



})