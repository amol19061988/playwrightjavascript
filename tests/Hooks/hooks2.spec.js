import { test, expect } from '@playwright/test';
const data = require('D:/Javascript-Playwright/PlayWriteWithJavascript/tests/Hooks/jsondata/testdata.json');
//Hooks before each 
test.beforeEach(async ({ page }) => {
    console.log("==========Before Each===========")
    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log(title);
})

//Hooks before each 
test.afterEach(async ({ page }) => {
    console.log("==========After Each===========")
})


test('Test Case -1', async function ({ page }) {
    //await page.locator('//input[@id="name"]').type("Tester")
    await page.locator('//input[@id="name"]').type(data.name) //reading username from json file
    console.log("==========Test1===========");
    await page.pause();

});

test('Test Case -2', async function ({ page }) {
    //await page.locator('//input[@id="email"]').type("Password")
    await page.locator('//input[@id="email"]').type(data.password)
    console.log("==========Test2===========")
    await page.pause();

});

