import { BasePage } from "../pageObjects/basePage.js";
export class CustomerInfo extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        // Locators
        this.userNameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.firstNameInput = this.page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = this.page.getByRole('textbox', { name: 'Last Name' });
        this.postalCodeInput = this.page.getByRole('textbox', { name: 'Postal Code' });
        this.resetButton = this.page.getByRole('button', { name: 'Reset App State' });

    }

    // Interaction method
    async enterUserName(userName) {
        await this.userNameInput.fill(userName);
    }
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode) {
        await this.postalCodeInput.fill(postalCode);
    }

}