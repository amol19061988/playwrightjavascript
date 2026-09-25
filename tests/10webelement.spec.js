import {test,expect} from  '@playwright/test';

test('Testcase3: Element status With Locator - xpath', async ({ page }) => {
waitUntil: "domcontentloaded"

await page.setViewportSize({ width: 1555, height: 900 });
await page.goto("https://qaplayground.com/practice/input-fields/");


const disabledInput = page.locator('//input[@id="disabledInput"]')
console.log(await disabledInput.isEnabled())


//input[@id="disabledInput"]

//await page.goto("https://testautomationpractice.blogspot.com/");

/* await page.locator("//input[@id='female']").check("Female")
await page.waitForTimeout(1000)  
 */

/* await page.locator("//input[@id='sunday']").check("sunday")             
await page.waitForTimeout(1000)  

const sunday = await page.locator("//input[@id='sunday']");                         //isChecked()
console.log(await sunday.isChecked());
await page.waitForTimeout(1000) 
 */

/* const adharCardNo = await page.locator("//input[@id='adharCardNo']");           //isVisible()
console.log(await adharCardNo.isVisible());
 */

/* const email = await page.locator("//input[@id='email']")                           //isHidden()
console.log(await email.isHidden())
await page.waitForTimeout(5000)
*/



// **********FOR enable and disable use this URL: await page.goto("https://qaplayground.com/practice/input-fields/");**********

/* 
const disabledInput = await page.locator("//input[@id='disabledInput']");                           //isEnabled()
console.log(await disabledInput.isEnabled());
await page.waitForTimeout(5000) 
*/

/* 
const disabledInput = await page.locator("//input[@id='disabledInput']");                           //isDisabled()
console.log(await disabledInput.isDisabled());
await page.waitForTimeout(5000)
*/

/* 
const disabledInput = await page.locator("//input[@id='disabledInput']");                           //isEditable() -false
console.log(await disabledInput.isEditable());
await page.waitForTimeout(5000) 
*/

const movieNameInput = await page.locator("//input[@id='movieNameInput']");                           //isEditable() -true
console.log(await movieNameInput.isEditable());
await page.waitForTimeout(5000)

});