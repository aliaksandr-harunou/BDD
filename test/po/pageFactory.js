const HomePage = require("./homePage/homePage");
const CartPage = require("./cartPage/cartPage");
const BasePage = require("./basePage/basePage");
const PizzaPage = require("./pizzaPage/pizzaPage");


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