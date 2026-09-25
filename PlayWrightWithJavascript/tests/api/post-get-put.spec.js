import { test, expect } from '@playwright/test'
let newId = '';

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
    newId = responseBody.id;
    expect(resp.status()).toBe(200);
    expect(resp.status()).toBeDefined();
    expect(responseBody.createdAt).toBeDefined();
    expect(responseBody.name).toBe('Apple MacBook Pro 16 03/09 Setp 2026');
});
//GET=======================
test('Get API Request', async function ({ request }) {

    //  const resp = await request.get(`https://api.restful-api.dev/objects/${newId}`)
    const resp = await request.get('https://api.restful-api.dev/objects/' + newId)
    console.log('Response code is ', resp.status())

    //Assertion
    expect(resp.status()).toBe(200);
    expect(resp.ok).toBeTruthy();  //AssertTrue

    // expect(resp.ok).toBeFalsy();  //AssertFalse

    //Assertion for valuess

    const respbody = await resp.json();
    console.log("Response Body Is :", respbody);
    console.log("Id :", respbody.id);
    console.log("Name :", respbody.name);
    console.log("data", respbody.data)
    console.log("Year", respbody.data.year)
    expect(respbody.id).toBe(newId)
    expect(respbody.name).toBe('Apple MacBook Pro 16 03/09 Setp 2026')
    expect(respbody.data.year).toBe(2019);

    //for dynamic assert to be check value is defined or not
    expect(respbody.name).toBeDefined();


});

//PUT========================

test('PUT API Request', async function ({ request }) {

    const reqBody = {
        "name": "Apple MacBook Pro 16 Rupali",
        "data": {
            "year": 2019,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
        }
    }

    const resp = await request.put(`https://api.restful-api.dev/objects/${newId}`,
        {
            Headers: { 'Content-Type': 'application/json' },
            data: reqBody
        });

    const responseBody1 = await resp.json();
    //  newId = responseBody.id;
    console.log(responseBody1);
});

//=====PATCH===========
test('PATCH API Request', async function ({ request }) {

    const patchreqBody = {
        "name": "Apple MacBook Pro 16 (Updated Name)"
    }

    const resp = await request.put(`https://api.restful-api.dev/objects/${newId}`,
        {
            Headers: { 'Content-Type': 'application/json' },
            data: patchreqBody
        });

    const responseBody1 = await resp.json();
    console.log(typeof responseBody1);
    console.log('Amol' + await responseBody1);
    console.log(responseBody1.name);
    ////
    console.log("#############333PATCH Request Logs$##############");
    console.log('URL : ', resp.url());
    console.log('StatusCode : ', resp.status());
    console.log('Status Text :', resp.statusText());
    console.log('Response Body :', await resp.text());
    console.log('Response Header:s', resp.headers());
    console.log("#############333PATCH Request Logs$##############");
    // Assert
    expect(responseBody1.id).toBeDefined();
    expect(responseBody1.name).toBe('Apple MacBook Pro 16 (Updated Name)');
});

test('DELETE API Request', async function ({ request }) {


    const resp = await request.put(`https://api.restful-api.dev/objects/${newId}`,
        {
            Headers: { 'Content-Type': 'application/json' }

        });

    const responseBody1 = await resp.json();
    console.log(typeof responseBody1);
    console.log('Amol' + await responseBody1);

    ////
    console.log("#############DELETE Request Logs$##############");
    console.log('URL : ', resp.url());
    console.log('StatusCode : ', resp.status());
    console.log('Status Text :', resp.statusText());
    console.log('Response Body :', await resp.text());
    console.log('Response Header:s', resp.headers());
    console.log("#############DELETE Request Logs$##############");

});