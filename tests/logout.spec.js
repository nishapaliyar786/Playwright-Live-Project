//import { test, expect } from "playwright/test";//

import {test,expect} from "@playwright/test";
 import { Login } from "../pages/login";
 import{Logout} from "../pages/logout.js"
 const data = JSON.parse((JSON.stringify(require('../utils/validlogin.json'))));


 

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoblaze.com/");
});

test("Login with valid credentials", async ({ page }) => {

  const loginobj = new Login(page);
  const logoutobj = new Logout(page);   

  await loginobj.clickLogin();
  await loginobj.enterCredentials(data.username, data.password);
  await loginobj.validloginButton();

  await logoutobj.clickLogout();       

  await page.pause();
});