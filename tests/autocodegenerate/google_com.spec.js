import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('sensex today');
  await page.getByText('sensex today', { exact: true }).click();

  await page.waitForTimeout(5000);
});