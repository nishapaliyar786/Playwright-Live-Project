//import { test, expect } from "playwright/test";//

const {test}= require('@playwright/test');
const data = require('../utils/validData.json');
const Loginscenarios = require('../pages/loginPage');
const Logout = require('../pages/logout');   

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoblaze.com/");
});

test("Login with valid credentials", async ({ page }) => {

  const loginobj = new Loginscenarios(page);
  const logoutobj = new Logout(page);   

  await loginobj.clickLogin();
  await loginobj.enterCredentials(data.username, data.password);
  await loginobj.validloginButton();

  await logoutobj.clickLogout();       

  await page.pause();
});