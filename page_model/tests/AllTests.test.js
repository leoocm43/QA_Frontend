import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage.js'
import CheckoutPage from '../pages/CheckoutPage.js'
import FinishPage from '../pages/FinishPage.js'
import {CREDENTIALS }from '../data/Constants.js'
import userRole from '../roles/Roles'


fixture ('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    ////await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
})

test('Login with an invalid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessageButton.exists).ok()
})

test('Logout from products page', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(ProductPage.menuButton)
    await t.click(ProductPage.logoutButton)
    await t.expect(LoginPage.loginLogo.exists).ok()
})

test('Navigate to the shopping cart', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(CartPage.singleItem)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.singleItemName.exists).ok()
})

test('Add multiple items to the shopping cart', async t => {
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(ProductPage.item1)
    await t.click(ProductPage.item2)
    await t.click(ProductPage.item3)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.cartItem1.exists).ok()
    await t.expect(CartPage.cartItem2.exists).ok()
    await t.expect(CartPage.cartItem3.exists).ok()
})

test('Continue with missing mail information', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(CartPage.singleItem)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.singleItemName.exists).ok()
    await t.click(CartPage.checkoutButton)
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.errorMessage.exists).ok()
})



test('Fill users information', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(CartPage.singleItem)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.singleItemName.exists).ok()
    await t.click(CartPage.checkoutButton)
    await t.typeText(CheckoutPage.firstnameField, CREDENTIALS.CHECKOUT_USER_INFO.FIRSTNAME)
    await t.typeText(CheckoutPage.lastnameField, CREDENTIALS.CHECKOUT_USER_INFO.LASTNAME)
    await t.typeText(CheckoutPage.zipField, CREDENTIALS.CHECKOUT_USER_INFO.ZIP)
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.overviewHeader.exists).ok()
})

test('Final order items', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(CartPage.singleItem)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.singleItemName.exists).ok()
    await t.click(CartPage.checkoutButton)
    await t.typeText(CheckoutPage.firstnameField, CREDENTIALS.CHECKOUT_USER_INFO.FIRSTNAME)
    await t.typeText(CheckoutPage.lastnameField, CREDENTIALS.CHECKOUT_USER_INFO.LASTNAME)
    await t.typeText(CheckoutPage.zipField, CREDENTIALS.CHECKOUT_USER_INFO.ZIP)
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.overviewHeader.exists).ok()
    await t.expect(CheckoutPage.selectedItem.exists).ok()
})

test('Complete a purchase', async t => {
    //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.useRole(userRole)
    await t.expect(ProductPage.pageTitle.exists).ok()
    await t.click(CartPage.singleItem)
    await t.click(ProductPage.cartButton)
    await t.expect(CartPage.cartPageTitle.exists).ok()
    await t.expect(CartPage.singleItemName.exists).ok()
    await t.click(CartPage.checkoutButton)
    await t.typeText(CheckoutPage.firstnameField, CREDENTIALS.CHECKOUT_USER_INFO.FIRSTNAME)
    await t.typeText(CheckoutPage.lastnameField, CREDENTIALS.CHECKOUT_USER_INFO.LASTNAME)
    await t.typeText(CheckoutPage.zipField, CREDENTIALS.CHECKOUT_USER_INFO.ZIP)
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.overviewHeader.exists).ok()
    await t.expect(CheckoutPage.selectedItem.exists).ok()
    await t.click(CheckoutPage.finishButton)
    await t.expect(FinishPage.finishHeader.exists).ok()
})
