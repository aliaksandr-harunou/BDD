const BasePage = require("../basePage/basePage");
const Element = require("../baseElements/baseElement");
const Collection = require("../baseElements/baseCollection");
const EC = protractor.ExpectedConditions;

class PizzaPage extends BasePage {
  constructor() {
    super();
    this.sizes = new Collection("Размеры", "#myModal > div > div > div > div.modal-body > form > div.goods__list__chks > ul > li");
    this.moveToCartButton = new Element("В корзину", "button.in-cart.popup-in-cart");
    this.closeButton = new Element("Закрыть окно", "span.close");
    this.deliveryModes = new Collection("Delivery Mode", "li > a");
    this.addresseOfPickups = new Collection("Addresses of Pickups", ".snap-address");

  };

  async clickOnMoveToCartButton() {
    await browser.wait(EC.visibilityOf(this.moveToCartButton.element), 10000);
    return this.moveToCartButton.click();
  }

  async getCountOfAvailableSizes() {
    return await this.sizeSection.getCount();
  }

  async closePizzaPage() {
    return await this.closeButton.click();
  }
};

module.exports = PizzaPage;