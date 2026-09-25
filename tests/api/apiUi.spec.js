import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' }) //this configuration is for the running without parallal.
let xApiKey1 = '';
let token = '';
test('X-API-KEY using UI', async function ({ page }) {

    await page.goto('https://restful-api.dev/sign-in/')
    await page.locator('//input[@autocomplete="email"]').type('amol@gmail.com')
    await page.locator('//input[@autocomplete="current-password"]').type('Amol@1234')
    await page.locator('//button[@type="submit"]').click();

    await page.waitForTimeout(10000)
    const xApiKey = await page.locator('//code/span').textContent();
    console.log(xApiKey);
    xApiKey1 = xApiKey.replaceAll('"', "")
    console.log(xApiKey1);
});

//Using api 
test('POST API Request for token creation', async function ({ request }) {

    const reqbody = {
        "email": "antonio4886@example.com",
        "password": "securePassword123",
        "name": "Antonio"
    }


    const resp = await request.post(
        "https://api.restful-api.dev/register",
        {
            headers: {
                'x-api-key': xApiKey1
            },
            data: reqbody
        }
    );
    const responsebody = await resp.json();
    console.log(resp)
    console.log(responsebody)
    console.log(responsebody.token)

    token = responsebody.token;
});

export function getxApikey() {
    return token
}

console.log(getxApikey());