const BasePage = require("../basePage/basePage");
const Collection = require("../baseElements/baseCollection");
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