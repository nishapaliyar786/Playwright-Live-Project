class Twoitems {
  constructor(page) {
    this.page = page;

    this.phone = page.getByRole('link', { name: 'Phones' });
    this.selectphone = page.getByRole('link', { name: 'Nokia lumia 1520' });
    this.addphone = page.getByText('Add to cart');

    this.homebtn = page.getByRole('link', { name: 'PRODUCT STORE' });

    this.monitor = page.getByRole('link', { name: 'Monitors' });
    this.selectmonitor = page.getByRole('link', { name: 'Apple monitor 24' });
    this.addmonitor = page.getByText('Add to cart');

    this.cartbtn = page.locator( '#cartur');


    this.placeorderbtn = page.getByRole('button', { name: 'Place Order' });

    // Correct input fields
    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.creditcard = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');

    this.purchasebtn = page.getByRole('button', { name: 'Purchase' });
  }

  // Add phone
  async addPhoneToCart() {
    await this.phone.click();
    await this.selectphone.click();

   // this.page.once('dialog', async dialog => {
   //   await dialog.accept();
   // });

    await this.addphone.click();
  }

  // Add monitor
  async addMonitorToCart() {
    await this.homebtn.click();
    await this.monitor.click();
    await this.selectmonitor.click();

    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.addmonitor.click();
  }

  // Cart
  async goToCart() {
    await this.cartbtn.click();
  }

  // Order
  async placeOrder() {
    await this.placeorderbtn.click();
  }

  async fillDetails(user) {
    await this.name.fill(user.name);
    await this.country.fill(user.country);
    await this.city.fill(user.city);
    await this.creditcard.fill(user.card);
    await this.month.fill(user.month);
    await this.year.fill(user.year);
  }

  // Purchase
  async purchase() {
    await this.purchasebtn.click();
  }
}

module.exports = Twoitems;
