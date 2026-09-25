export class Homepage {

    constructor(page) {

        //making this page as global
        this.page = page;

        //locators
        this.nameTextbox = page.locator("//input[@id='name']");
        this.emailTextbox = page.locator("//input[@id='email']");
        this.phone = page.locator("//input[@id='phone']");


    }


    //lunch url
    async openPage() {
        await this.page.goto("https://testautomationpractice.blogspot.com/")

    }

    async enterName(name) {
        await this.nameTextbox.type(name);

    }

    async enterEmail(email) {
        await this.emailTextbox.type(email);
    }

    async enterPhone(phone) {

        await this.phone.type(phone)
    }
}