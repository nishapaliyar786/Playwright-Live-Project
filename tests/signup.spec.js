import {test,expect} from "@playwright/test";
 import { signup } from "../pages/signup";
 
 const data = JSON.parse((JSON.stringify(require('../utils/signup.json'))))

 test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
 })


 test('live signupPOM',async({page})=>

{

const obj = new signup(page)
await obj.clicklink()
await obj.enterusername(data.username)
await obj.enterpassword(data.password)
await obj.submitclick()

})
 test('live signupclosePOM',async({page})=>

{
const obj = new signup(page)
await obj.clicklink()
await obj.enterusername(data.username)
await obj.enterpassword(data.password)
await obj.closesubmit()

}
)