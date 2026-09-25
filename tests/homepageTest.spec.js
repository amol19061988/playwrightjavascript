import { test } from '@playwright/test';

import { Homepage } from '../pages/homepage';
import * as read_file from '../tests/utility/readData';

test('Test Case-Enter User details', async function ({ page }) {
    const data = read_file.readexcel();
    console.log(data[0].Name)
    console.log(data[1].Rollno)
    console.log(data[2].Address)
    console.log(data[3].Marks)
    //constructor call

    const homepage = new Homepage(page);

    await homepage.openPage();

    await homepage.enterName("Amol");
    await homepage.enterEmail("amolb@gmail.com")
   // await homepage.enterPhone("9888822228")
    await homepage.enterPhone(data[3].Marks)
    await page.pause();

});




