import { test, expect } from '@playwright/test'

test('Alerts', async function ({ page }){
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(3000)
  
  page.on('dialog', async dialog => {
   console.log('Amol',dialog.message(),dialog.defaultValue);
    //await dialog.message();
    //await dialog.dismiss();
    //await dialog.type("Hi ok")
     await dialog.accept()
    //await dialog.text()
   //+  await dialog.gettext()
  });

  await page.waitForTimeout(4000)
await page.locator('//button[@id="alertBtn"]').click();
 await page.waitForTimeout(4000)

});