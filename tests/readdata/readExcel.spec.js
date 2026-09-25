import { test } from '@playwright/test';
import * as read_file from '../utility/readData'

test('Read excel sheet data', async ({ page }) => {

  let data = read_file.readexcel();

  console.log(data)
  await page.goto("https://testautomationpractice.blogspot.com/")

  await page.locator("//input[@id='name']").type((data[0].Name))
  await page.locator("//input[@id='email']").type((data[0].Address))

  await page.waitForTimeout(5000)
});