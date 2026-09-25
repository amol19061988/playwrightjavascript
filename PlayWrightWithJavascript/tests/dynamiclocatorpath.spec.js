import { test } from '@playwright/test';

test('Smart Locator', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //locator --
    //(//div[@class="widget-content"])[19]/child::ul/child::li[1]
    await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('Amol');
   
});