import { test, expect } from '@playwright/test'


test('POST API Request', async function ({ request }) {

    const reqBody = {
        "name": "Apple MacBook Pro 16 03/09 Setp 2026",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };


    const resp = await request.post("https://api.restful-api.dev/objects",
        {
            Headers: { 'Content-Type': 'application/json' },
            data: reqBody
        });

    const responseBody = await resp.json();
    
    console.log('Response code is:', resp.status())

    console.log(responseBody);

    expect(resp.status()).toBe(200);
    expect(resp.status()).toBeDefined();
    expect(responseBody.createdAt).toBeDefined();
    expect(responseBody.name).toBe('Apple MacBook Pro 16 03/09 Setp 2026');
});
