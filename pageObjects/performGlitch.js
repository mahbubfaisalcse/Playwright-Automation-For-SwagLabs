import { BasePage } from "../pageObjects/basePage.js";
export class PerformGlitch extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        // Locators
        this.ztoASelector = this.page.locator('[data-test="product-sort-container"]');
        this.tShirt = this.page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.backToProducts = this.page.locator('[id="back-to-products"]');
        this.logout = this.page.getByRole("link", { name: "Logout" });


    }

    // Interaction method
    async clickZtoASelector() {
        await this.ztoASelector.selectOption("za");
    }
    async clickTShirt() {
        await this.tShirt.click();
    }
    async clickBackToProducts() {
        await this.backToProducts.click();
    }
    async clickLogout() {
        await this.logout.click();
    }
}