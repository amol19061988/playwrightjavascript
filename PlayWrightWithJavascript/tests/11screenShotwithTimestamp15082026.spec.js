import {test , expect}  from '@playwright/test'

test('Take Screeshot',async({page})=>{

    let d= new Date();
let timestamp=d.toString().replaceAll(':','_').substring(0,24).replaceAll(' ','_').substring(8,24);

  await  page.goto("https://qaplayground.com/practice/input-fields/")
  await page.waitForTimeout(3000);
  await page.screenshot({path:'screenshots/image'+timestamp+'.png'});
});

let d= new Date();


//console.log(d);

//console.log(d.toString().replaceAll(':','_'));
//console.log(d.toString().replaceAll(':','_').substring(0,24));
//console.log(d.toString().replaceAll(':','_').substring(0,24).replaceAll(' ','_'));
//console.log(d.toString().replaceAll(':','_').substring(0,24).replaceAll(' ','_').substring(8,24));

