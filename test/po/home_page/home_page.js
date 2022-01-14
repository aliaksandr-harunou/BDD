const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");
const EC = protractor.ExpectedConditions;

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://pzz.by/";
      this.pizzaSection = new Collection("Pizza", "a.show-preview");
    };
    
    open() {
      return super.open(this.url);
    };

};

module.exports = HomePage;