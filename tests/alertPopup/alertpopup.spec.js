import { test, expect } from '@playwright/test'
import { AsyncLocalStorage } from 'node:async_hooks'


test('Frames', async function ({ page }) {
    let testcaseNo = 'TC101'
await page.goto('https://testautomationpractice.blogspot.com/')

  await page.waitForEvent("//button[@id='confirmBtn']");
  await page.locator("//button[@id='confirmBtn']").click();
  await page.waitForTimeout(5000) 

//await page.getByRole('button', { name: 'Simple Alert' }).click();
//await page.waitForTimeout(5000)

const popupPromise = page.waitForEvent('popup', { timeout: 15000 });

await page.getByRole('button', { name: 'Simple Alert' }).click();

const popup = await popupPromise;

await popup.waitForLoadState('domcontentloaded');

console.log('Popup URL:', popup.url());


})  
