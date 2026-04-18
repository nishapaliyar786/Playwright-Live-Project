import {test,expect} from "@playwright/test";
 import { Login } from "../pages/login";

 
const data=JSON.parse((JSON.stringify(require('../utils/validlogin.json'))))
const dataset = require('../utils/invalidlogin.json')
 

 test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
  
 })

 test("Login with valid credentials",async({page})=>{

const loginobj=new Login(page);
await loginobj.clickLogin();
await loginobj.enterCredentials(data.username,data.password);
await loginobj.validloginButton();


//await expect(page.locator('#logInModal')).toBeHidden();

//await loginobj.welcomeUser.waitFor();//

//await expect(loginobj.welcomeUser).toHaveText(Welcome ${data.username});

//await expect(loginobj.welcomeUser).toContainText(Welcome ${data.username});
//console.log(await(loginobj.welcomeUser).textContent());//not recommended debugging purpose//

await page.pause()

 // await expect(loginobj.welcomeUser)//
 //   .toContainText(Welcome ${data.username});//

})


for(const datanew of dataset){

test(`Invalid login for ${datanew.username}`, async({page})=>{

const logininv=new Login(page);
await logininv.clickLogin()
await logininv.enterCredentials(datanew.username,datanew.password)
await logininv.invalidloginButton()


})
}