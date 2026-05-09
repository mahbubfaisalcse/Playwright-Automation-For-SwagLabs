// @ts-check
import { test, expect } from "@playwright/test";
import { CustomerInfo } from "../pageObjects/customerInfo.js";

test.describe.serial("Add to cart test by login with performance glitch user", () => {
  test('Validate add to cart', async ({ page }) => {
    const customerInfo = new CustomerInfo(page);
    await page.goto('https://www.saucedemo.com/', {timeout: 60000});
    await customerInfo.enterUserName('performance_glitch_user');
    await customerInfo.enterPassword('secret_sauce');
    await customerInfo.clickButton("Login");
    await expect(page.locator('[class="title"]')).toHaveText("Products");

    await page.locator('[id="react-burger-menu-btn"]').click();
    await page.locator('[id="reset_sidebar_link"]').click();
    await page.locator('[id="react-burger-cross-btn"]').click();
    
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    await page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    await page.locator('[id="shopping_cart_container"]').click();
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Test.allTheThings() T-Shirt (Red)"]);
    await page.locator('[id="checkout"]').click();
    await page.locator('[id="first-name"]').fill("Faisal");
    await page.locator('[id="last-name"]').fill("Mahbub");
    await page.locator('[id="postal-code"]').fill("12345");
    await page.locator('[id="continue"]').click();
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText(["Test.allTheThings() T-Shirt (Red)"]);
    await page.locator('[id="finish"]').click();
    await expect(page.locator('[class="complete-header"]')).toHaveText("Thank you for your order!");
    await page.locator('[id="back-to-products"]').click();

    await page.locator('[id="react-burger-menu-btn"]').click();
    await page.locator('[id="reset_sidebar_link"]').click();
    await page.locator('[id="react-burger-cross-btn"]').click();

    await page.locator('[id="react-burger-menu-btn"]').click();
    await page.locator('[id="reset_sidebar_link"]').click();
    await page.locator('[id="logout_sidebar_link"]').click();
    
  });
});