import { test, expect } from '@playwright/test'

test('Get Text', async function ({ page }) {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const locator = await page.locator("(//ul)[3]")

    let text1 = await locator.textContent();
    let text2 = await locator.innerText();
    let text3 = await locator.allTextContents();
    let text4 = await locator.allInnerTexts();
    let text5 = await locator.innerHTML();



    console.log("textContent():", text1)  // Here it will show with unwanted texts //One Elements DOM TEXT retrun string

    console.log("innerText():", text2)  //Innertext it will show as it is text //One Elements visible  Retrun string

    console.log("allTextContents():", text3)  //All matching elements,use for multiple elements//It will retrun in array formatreturn array
    console.log("allInnerTexts():", text4) //All visible text,use for multiple element, return array
    console.log("innerHTML():", text5) //One element for getting returns html code from webpage


})