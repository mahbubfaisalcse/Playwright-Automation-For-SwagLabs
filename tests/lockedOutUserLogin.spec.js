import { test, expect } from "@playwright/test";
import { CustomerInfo } from "../pageObjects/customerInfo.js";

const userName = "locked_out_user";
const password = "secret_sauce";

test.describe.serial("Login with locked-out user", () => {
  test('should display error message', async ({ page }) => {
    const customerInfo = new CustomerInfo(page);
    await page.goto('https://www.saucedemo.com/', {timeout: 60000});
    await customerInfo.userNameInput.fill(userName);
    await customerInfo.passwordInput.fill(password);
    await customerInfo.clickButton("Login");
    await expect(page.locator('[data-test="error"]')).toBeVisible();

  });
});