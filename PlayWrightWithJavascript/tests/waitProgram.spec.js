import { test, expect } from '@playwright/test'

test('Locator Test', async ({ page }) => {


    await page.goto("https://qaplayground.com/practice/input-fields/")


await page.waitForTimeout(5000);
 //=====
 await page.locator("//button[@id='submitMovieBtn']").waitFor({state:'visible'});
 await page.locator("//button[@id='submitMovieBtn']").waitFor({state:'attached'});
 await page.locator("//button[@id='submitMovieBtn']").waitFor({state:'detached'});
 await page.locator("//button[@id='submitMovieBtn']").waitFor({state:'hidden'});

 //===Expect wait
 await expect(page).toHaveURL('https://qaplayground.com/practice/input-fields/');

 //load wait
 await page.waitForLoadState('domcontentloaded');

});