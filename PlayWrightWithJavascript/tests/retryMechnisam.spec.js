import { expect, test } from '@playwright/test';

test.describe.configure({ retries: 2 });
test('Test Check', async ({ page }) => {


    await page.goto("https://www.facebook.com")

    await expect(page).toHaveTitle('Faceebook')

});

//npx playwright test retryMechnisam.spec.js --headed --retries=2