import { test, expect } from '@playwright/test'
import { AsyncLocalStorage } from 'node:async_hooks'


test('Frames', async function ({ page }) {
    let testcaseNo = 'TC101'
await page.goto('https://automationtesting.in/frame.html#google_vignette')
const iframe= await page.frameLocator("//iframe[@id='singleframe']");

await iframe.locator("//input[@type='text']").type("Test user123")
//How to come out from iframe.
await page.locator("").click();
///Nested frame
//const outframe=
//const inframe =
//await inframe=
   
})