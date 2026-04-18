import { link } from "node:fs";

export class AddCart
{
    constructor(page)
    {
        this.page =page;
        this.product = this.page.getByRole('link',{name:"Samsung galaxy s6"})
        this.addcartt = this.page.getByText('Add to cart')
    }
   
    async selectproduct()
    {
        await this.product.click()
        await this.page.pause()
    }
    async addcartpopup()
    {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addcartt.click()
        ])
        await dialog.accept()
        await this.page.pause()
    }
   
}