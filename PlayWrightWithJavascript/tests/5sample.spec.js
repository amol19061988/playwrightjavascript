//With pause this program

import { test, expect } from '@playwright/test' // import playright libraries

test('This is my first Playwright Test', async  ({ page })=> {
   await page.goto("https://mail.google.com/mail/u/0/#inbox")
  
   let title = await page.title();
   console.log('Its my first title ->' + title);
  await page.pause();
   let url=page.url();
   console.log('Its my url -> '+url)

   expect(100).toBe(100)

     await page.pause();  // It will take pause while execution of program
   expect('www.facebook.com').toBe(url)
      expect('Gmail').toBe(title)

   })