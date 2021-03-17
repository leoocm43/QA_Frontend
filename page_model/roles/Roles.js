import { Role } from 'testcafe';
import {CREDENTIALS }from '../data/Constants.js'
import LoginPage from '../pages/LoginPage'

const userRole = Role('https://www.saucedemo.com/', async t => {
    await t.typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
    await t.typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(LoginPage.loginButton)
}, {preserveUrl:true});

export default userRole