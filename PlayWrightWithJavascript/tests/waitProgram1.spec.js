import { test, expect } from '@playwright/test';

test('demo detached', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // The checkbox is initially in the DOM
  await expect(page.locator('#checkbox')).toBeAttached();

  console.log('Checkbox is attached');

  // Click Remove
  await page.getByRole('button', { name: 'Remove' }).click();

  // Wait until the checkbox is removed from the DOM
  await expect(page.locator('#checkbox')).toBeDetached();

  console.log('Checkbox is detached');
});