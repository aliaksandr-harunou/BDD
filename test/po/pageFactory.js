const HomePage = require("./home_page/home_page");
const CartPage = require("./cart_page/cart_page");
const BasePage = require("./base_page/base_page");
const PizzaPage = require("./pizza_page/pizza_page");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();  
            case "Cart":
                return new CartPage();  
            case "Pizza":
                return new PizzaPage();    
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;