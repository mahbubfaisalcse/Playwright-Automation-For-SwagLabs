import { BasePage } from "../pageObjects/basePage.js";
export class StandardUser extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        // Locators
        this.resetLink = this.page.getByRole("link", { name: "Reset App State" });
        this.bagpack = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
        this.bikeLight = this.page.locator('[id="add-to-cart-sauce-labs-bike-light"]');
        this.boltTShirt = this.page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.shoppingCart = this.page.locator('[id="shopping_cart_container"]');  

    }

    // Interaction method
    async clickResetLink() {
        await this.resetLink.click();
    }
    async clickBagpack() {
        await this.bagpack.click();
    }
    async clickBikeLight() {
        await this.bikeLight.click();
    }
    async clickBoltTShirt() {
        await this.boltTShirt.click();
    }
    async clickShoppingCart() {
        await this.shoppingCart.click();
    }

}