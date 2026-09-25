import { test, expect } from '@playwright/test' // import playright libraries

test('Locator Test -xpath', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(3000)

    //const multiselect = await page.locator("//select[@id='colors']")
    //it will take particular element screenshot
    const multiselect = await page.locator("//select[@id='colors']").screenshot({path:'screenshots/image_dropdown.jpeg'})
    //const alloptions = await multiselect.allTextContents();

   // console.log(alloptions)
   // for (let col of alloptions) {
  //      await multiselect.selectOption[col];
  //  }
//await page.waitForTimeout(5000);

 //await page.screenshot({path:'screenshots/image.png'});
 //await page.screenshot({path:'screenshots/image_fullpage.jpeg',fullPage:true});

 let d= new Date();
 console.log(d.toString().replaceAll(':',"_"))
})