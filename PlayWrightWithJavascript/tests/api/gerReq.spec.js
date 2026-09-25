import { test, expect } from '@playwright/test';

test('Get API Request', async function ({ request }) {

    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    console.log(await response.json())
});