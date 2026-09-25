import { test } from '@playwright/test'

test('This is my first Program', async ({ page }) => {
    await page.goto("https://chatgpt.com/")

    let title = page.title();
    console.log("Title -> "+title);
    let url = page.url();
    console.log("Url -> " + url)

}

)