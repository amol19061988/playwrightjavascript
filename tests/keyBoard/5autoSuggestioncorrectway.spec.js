import { test, expect } from '@playwright/test'

test('Auto Suggestion Handling', async function ({ page }) {

    await page.goto('https://www.google.com/')

    await page.locator("//textarea[@class='gLFyf']").type("iphone");

    await page.waitForTimeout(2000);

    //(//ul[@role='listbox']/li[1])

    let options = await page.locator("//ul[@role='listbox']/li/Div"); //.nth(0);

    let text = await options.nth(1).innerText();
    console.log(text)

    let text2 = await options.nth(2).innerText();
    console.log(text2)

    for (let i = 0; i <= options.count(); i++) {

        let text1 = (await options.nth(i).innerText()).nth(0);
        console.log(text1);

        if (text1.includes('iPhone 17')) {
            await options.nth(i).click();
        }

     await page.waitForTimeout(5000)
    }
})