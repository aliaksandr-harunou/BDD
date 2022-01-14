const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.navigationLinks = new Collection("Navigation Links", "#content > div.pzz-navigation.no-print > div.pzz-navigation__main > ul.navigation-goods > li > a");
        this.cart = new Element("Cart", "div.pzz-cart__goto");
    };
};

module.exports = Header;