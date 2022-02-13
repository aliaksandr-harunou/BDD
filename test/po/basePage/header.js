const Element = require("../baseElements/baseElement");
const Collection = require("../baseElements/baseCollection");

class Header {
    constructor() {
        this.navigationLinks = new Collection("Navigation Links", "#content > div.pzz-navigation.no-print > div.pzz-navigation__main > ul.navigation-goods > li > a");
        this.cart = new Element("Cart", "div.pzz-cart__goto");
    };
};

module.exports = Header;