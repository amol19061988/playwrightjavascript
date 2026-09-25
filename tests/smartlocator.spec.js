import { test } from '@playwright/test';

test('Smart Locator', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //smart locators
    //await page.getBy
    await page.getByRole('button', { name: 'START' }).click();
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Amol');
    //await page.getByRole('href',{name:'Home'}).click();
    await page.getByAltText('altText').click(); //Value of attibutes
    await page.getByLabel('label') //associate with lable
    await page.getByPlaceholder ('Enter Name').type('Test Message');//value of placeholder attribute
    await page.getByTestId() //provide the value attribute 
    await page.getByTitle() //Provide value from title attribute
    await page.getByText('Text Value') //locate element text content
    await page.waitForTimeout(5000)
});