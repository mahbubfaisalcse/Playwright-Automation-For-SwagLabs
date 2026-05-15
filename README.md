Swag Labs UI Automation Testing

This project contains automated UI test scripts for the Swag Labs (Sauce Demo) website using Playwright with JavaScript and Page Object Model (POM) design pattern.

The automation suite covers login functionality, add-to-cart features, and different user scenarios including standard and performance glitch users.

```txt
project-root/
│
├── pageObjects/
│   ├── basePage.js
│   ├── customerInfo.js
│   ├── performGlitch.js
│   └── standardUser.js
│
├── tests/
│   ├── addToCartWithPerformGlitch.spec.js
│   ├── addToCartWithStandardUser.spec.js
│   └── lockedOutUserLogin.spec.js
│
├── package.json
├── playwright.config.js
└── README.md
```

Technologies Used:
Playwright,
JavaScript,
Node.js,
Page Object Model (POM),
Git & GitHub

Test Scenarios Covered:
Login Testing,
Standard user login,
Locked out user validation,
Invalid login scenarios,

Cart Functionality:
Add product to cart,
Verify cart items,
Checkout flow validation,

User Types Tested:
Standard User,
Performance Glitch User,
Locked Out User

This project follows the Page Object Model (POM) design pattern to improve:
Reusability,
Maintainability,
Readability,
Scalability,

Each page functionality is separated into individual page object classes.

Author
Md. Mahbubul Islam
