//import { test, expect } from '@playwright/test';
 import {test} from "../utils/fixture"


const data = require('../utils/validlogin.json');
const Loginscenarios = require('../pages/login');
const Twoitems = require('../pages/purchase');

//test.beforeEach(async ({ page }) => {
 // await page.goto('https://demoblaze.com/');

  //const login = new Loginscenarios(page);
  //await login.clickLogin();
  //await login.usernamel.fill(data.username);
  //await login.passwordl.fill(data.password);
  //await login.loginbutton.click();

  //await expect(login.welcomeUser).toBeVisible({ timeout: 10000 });
 //// await expect(login.welcomeUser).toContainText(data.username);
//});

test('Adding Phone and Monitor', async ({login,page }) => {

  const items = new Twoitems(page);
  const user = { name: 'Nisha', country: 'IND',city: 'Pta',card: '1234567890',
    month: '04',year: '2026'
  };

  await items.addPhoneToCart();
  await items.addMonitorToCart();
  await items.goToCart();

  const cartTable = page.locator('tbody');
  await expect(cartTable).toContainText('Nokia lumia 1520');
  await expect(cartTable).toContainText('Apple monitor 24');

  await items.placeOrder();
  await items.fillDetails(user);
  await items.purchase();

  const confirmation = page.locator('.sweet-alert');
  await expect(confirmation).toBeVisible();
  await expect(confirmation).toContainText('Thank you for your purchase');
});