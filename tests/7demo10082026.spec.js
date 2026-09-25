//With pause this program

import { test, expect } from '@playwright/test' // import playright libraries

test('This is my first Playwright Test', async  ({ page })=> {
await page.goto("https://www.facebook.com/");

//Login and Password
await page.locator("#_R_1h6kqsqppb6amH1_").type("Hellologin");
await page.locator("#_R_1hmkqsqppb6amH1_").type("Hellologin");

//await page.getByText("Log in").click();

await page.locator("Login").click()
  page.pause();
//page.waitForTimeout(5000);
   })