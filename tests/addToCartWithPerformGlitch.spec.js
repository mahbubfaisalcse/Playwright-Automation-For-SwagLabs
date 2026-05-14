// @ts-check
import { test, expect } from "@playwright/test";
import { CustomerInfo } from "../pageObjects/customerInfo.js";
import { StandardUser } from "../pageObjects/standardUser.js";
import { PerformGlitch } from "../pageObjects/performGlitch.js";

const userName = "performance_glitch_user";
const password = "secret_sauce";

test.describe.serial("Add to cart test by login with performance glitch user", () => {
  test('Validate add to cart', async ({ page }) => {
    const customerInfo = new CustomerInfo(page);
    const standardUser = new StandardUser(page);
    const performGlitch = new PerformGlitch(page);
    await page.goto('https://www.saucedemo.com/', {timeout: 60000});
    await customerInfo.enterUserName(userName);
    await customerInfo.enterPassword(password);
    await customerInfo.clickButton("Login");
    await expect(page.locator('[class="title"]')).toHaveText("Products");

    await customerInfo.clickButton("Open Menu");
    await standardUser.clickResetLink();
    await customerInfo.clickButton("Close Menu");
    
    await performGlitch.clickZtoASelector();
    await performGlitch.clickTShirt();

    await standardUser.clickShoppingCart();
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Test.allTheThings() T-Shirt (Red)"]);
    await customerInfo.clickButton("Checkout");
    await customerInfo.enterFirstName("Faisal");
    await customerInfo.enterLastName("Mahbub");
    await customerInfo.enterPostalCode("12345");
    await customerInfo.clickButton("Continue");
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Test.allTheThings() T-Shirt (Red)"]);
    await customerInfo.clickButton("Finish");
    await expect(page.locator('[class="complete-header"]')).toHaveText("Thank you for your order!");
    await performGlitch.clickBackToProducts();

    await customerInfo.clickButton("Open Menu");
    await standardUser.clickResetLink();
    await customerInfo.clickButton("Close Menu");

    await customerInfo.clickButton("Open Menu");
    await performGlitch.clickLogout();
    
  });
});