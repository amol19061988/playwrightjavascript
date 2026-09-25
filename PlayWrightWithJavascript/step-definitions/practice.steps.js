
import { Before,After, Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from '@playwright/test'
import { Homepage } from "../pages/HomePage.js";




Before(async function () {
    this.browser = await chromium.launch({
        headless: false
    });

    this.page = await this.browser.newPage();
   

    this.homepage = new Homepage(this.page);
    await this.page.waitForTimeout(3000);
});





Given('Launch application url', async function () {
    console.log("Launch application url");
    await this.homepage.openPage();


});

When('User Enters name',async function () {
    console.log("User Enters name");
    await this.homepage.enterName('Amol');
});

When('User Enters emailId',async function () {
    console.log("User Enters emailId");
    await this.homepage.enterEmail("Bhagat.amol@gmail.com");
});

When('User Enters phonenumber', async function () {
    console.log("User Enters phonenumber");
    await this.homepage.enterPhone('878822282282');
});

Then('Validate page title', function () {
    console.log("Validate page title");
});
//==================================================
When('User Enters name "{string}"',async function (name) {
    console.log(name)
    
  await this.homepage.enterName(name);

});

When('User Enters email "{string}"', async function (email) {
    // Write code here that turns the phrase above into concrete actions
    console.log(email)
      await this.homepage.enterEmail(email);
});

 

After(async function () {
    //await this.browser.close();
  //  this.page.waitForTimeout(3000);
    
})