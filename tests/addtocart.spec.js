import {expect} from "@playwright/test";
 import { AddCart } from "../pages/addToCart";
 import { Login } from "../pages/login";
 import {test} from "../utils/fixture"
 import {data} from "../utils/validlogin.json"

 
//  test.beforeEach(async({page})=>{
//   await page.goto("https://demoblaze.com/")
//  })
 
 
 test('add to cart',async ({ login,page }) => {
  
//   const loginobj=new Login(page);
//  await loginobj.clickLogin();
//  await loginobj.enterCredentials(data.username,data.password);
//  await loginobj.validloginButton();

 const addcartobj = new AddCart(page)
  await addcartobj.selectproduct();
 await addcartobj.addcartpopup();
 
 
 //await expect(page.locator('#logInModal')).toBeHidden();
 
 //await loginobj.welcomeUser.waitFor();//
 
 //await expect(loginobj.welcomeUser).toHaveText(Welcome ${data.username});
 
 //await expect(loginobj.welcomeUser).toContainText(Welcome ${data.username});
 //console.log(await(loginobj.welcomeUser).textContent());//not recommended debugging purpose//
 
});