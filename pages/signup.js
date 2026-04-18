export class signup  //export is used to signup class reuse somewhere
{
  //constructor used so it is pagefactory design pattern
    constructor(page)
    {
        this.page=page;
this.signuplink = this.page.locator('xpath=//a[@id="signin2"]');
this.username=this.page.locator("#sign-username")
this.password =this.page.locator("#sign-password")
this.submitbtn = this.page.getByRole('button',{name:"Sign up"})
this.close = this.page.getByRole('button',{name:'Close'}).last();


    }
    async clicklink()
    {
        await this.signuplink.click()
       

    }
    async enterusername(username_value)//username_value is get from json or excel
    {
       
       await this.username.fill(username_value)
    }
    async enterpassword(passwordvalue)
    {
        await this.password.fill(passwordvalue)
    }
    async submitclick()
    {
        await this.submitbtn.click()
    }
     async closesubmit()
    {
        await this.close.click()
    }

}