const {test:base} = require("@playwright/test")
import { Login } from "../pages/login";
//import { use } from "react";

const data=JSON.parse((JSON.stringify(require('../utils/validlogin.json'))))

exports.test = base.extend({
    login:async({page},use)=>{
        await page.goto("https://demoblaze.com/")
        const loginobj=new Login(page);
        await loginobj.clickLogin();
 await loginobj.enterCredentials(data.username,data.password);
 await loginobj.validloginButton();
 await use(page)
    }
})