import { test } from '@playwright/test' // import playright libraries

//test('Titile/Test CaseName','Body function')
//test('Titile/Test CaseName','Details','Body funtion')
//Page is reserved keyword and its parameter
//Page object/object destricting -
//Playwright create many useful objects,one of them is object
//Page represents tab in browser
//await ->wait until operation is happen
//test('This is my first Playwright Test1', async function({ page })=>{})
test('This is my first Playwright Test', async  ({ page })=> {
   await page.goto("https://mail.google.com/mail/u/0/#inbox")
  
   let title = await page.title();
   console.log('Its my first title ->' + title);
   
   let url=page.url();
   console.log('Its my url -> '+url)
})