export class Logout {

  constructor(page) {
    this.page = page;

    this.logout = this.page.getByRole("link", { name: "Log out" });
  }

  async clickLogout() {
    await this.logout.click();
  }
}

