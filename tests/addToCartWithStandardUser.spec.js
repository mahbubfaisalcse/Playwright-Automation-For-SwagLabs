// @ts-check
import { test, expect } from "@playwright/test";
import { CustomerInfo } from "../pageObjects/customerInfo.js";
import { StandardUser } from "../pageObjects/standardUser.js";

const userName = "standard_user";
const password = "secret_sauce";

test.describe.serial("Add to cart test by login with standard user", () => {
  test('Validate add to cart', async ({ page }) => {
    const customerInfo = new CustomerInfo(page);
    const standardUser = new StandardUser(page);
    await page.goto('https://www.saucedemo.com/', {timeout: 60000});
    await customerInfo.enterUserName(userName);
    await customerInfo.enterPassword(password);
    await customerInfo.clickButton("Login");
    await expect(page.locator('[class="title"]')).toHaveText("Products");

    await customerInfo.clickButton("Open Menu");
    await standardUser.clickResetLink();
    await customerInfo.clickButton("Close Menu");

    await standardUser.clickBagpack();
    await standardUser.clickBikeLight();
    await standardUser.clickBoltTShirt();

    await standardUser.clickShoppingCart();
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"]);
    await customerInfo.clickButton("Checkout");

    await customerInfo.enterFirstName("Faisal");
    await customerInfo.enterLastName("Mahbub");
    await customerInfo.enterPostalCode("12345");
    await customerInfo.clickButton("Continue");
    
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"]);
    await customerInfo.clickButton("Finish");
    await expect(page.locator('[class="complete-header"]')).toHaveText("Thank you for your order!");
    
  });
});