import { test, expect } from '@playwright/test';

test('Get API Request', async function ({ request }) {

    const resp = await request.get('https://api.restful-api.dev/objects/7')

    console.log('Response code is ', resp.status())

    //Assertion
    expect(resp.status()).toBe(200);
    expect(resp.ok).toBeTruthy();  //AssertTrue

    // expect(resp.ok).toBeFalsy();  //AssertFalse

    //Assertion for values

    const respbody = await resp.json();
    console.log("Response Body Is :", respbody);
    console.log("Id :", respbody.id);
    console.log("Name :", respbody.name);
    console.log("data", respbody.data)
    console.log("Year", respbody.data.year)
    expect(respbody.id).toBe('7')
    expect(respbody.name).toBe('Apple MacBook Pro 16')
    expect(respbody.data.year).toBe(2019);

    //for dynamic assert to be check value is defined or not
    expect(respbody.name).toBeDefined();
 

});