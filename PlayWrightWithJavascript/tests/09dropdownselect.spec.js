import  {test,expect} from '@playwright/test'

test("SelectDropdown",async ({page})=>{
   ///Set Page Size
   
   await page.goto("https://testautomationpractice.blogspot.com/")
      
       const element =page.locator("//select[@id='country']");
       element.scrollIntoViewIfNeeded();
       await page.waitForTimeout(3000);
   await  page.locator("//select[@id='country']").selectOption({label:'India'})

   await page.waitForTimeout(3000);

}) ;