import { test, expect } from '@playwright/test';



test.skip('Test Case -1', async function ({ page }) {


    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);

    await page.locator('//input[@id="name"]').type("Tester")


});

test.skip('Test Case -2', async function ({ page }) {


    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);
    await page.locator('//input[@id="email"]').type("Password")


});
//test.only
test.fixme('Test Case -3  phone number', async function ({ page }) {


    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);
    await page.locator('//input[@id="phone"]').type("9858552547")


});

test('Test Case 4-  Address ', async function ({ page }) {

test.setTimeout(1000)
    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);
    await page.locator('//textarea[@id="textarea"]').type("Pune")


});
