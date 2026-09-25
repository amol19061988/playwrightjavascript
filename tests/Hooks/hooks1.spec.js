import { test, expect } from '@playwright/test';

//Hooks before all 
test.beforeAll(async () => {
    console.log("==========Before All=============")
})

//Hooks After all 
test.afterAll(async () => {
    console.log("==========After All=============")
})

test('Test Case -1', async function ({ page }) {


    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);

    await page.locator('//input[@id="name"]').type("Tester")


});

test('Test Case -2', async function ({ page }) {


    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);
    await page.locator('//input[@id="email"]').type("Password")


});

