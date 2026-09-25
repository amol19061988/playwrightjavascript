import { test } from '@playwright/test';

test('Smart Locator', async ({ page }) => {
    await page.goto("https://www.facebook.com")

    //smart locators
    //await page.getBy
    
    await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('Amol');
    await page.getByRole('textbox', { name: 'Password' }).fill('Amol');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000);
    await page.addListener(121);
});