import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('PageUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('PageUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('PageUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('PageUp');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('NumLock');
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('998898999');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).press('Tab');
  await page.getByRole('radio', { name: 'Male', exact: true }).press('Shift+Tab');
  await page.getByRole('textbox', { name: 'Address:' }).fill('Pune');
  await page.getByRole('textbox', { name: 'Address:' }).press('Tab');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('yellow');

  await page.waitForTimeout(5000);
  
});