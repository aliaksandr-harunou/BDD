const {Given,When,setDefaultTimeout} = require('@cucumber/cucumber');
const PageFactory = require("../po/pageFactory");
const homePage = PageFactory.getPage("Home");
const cartPage = PageFactory.getPage("Cart");
const pizzaPage = PageFactory.getPage("Pizza");
setDefaultTimeout(60000);

Given('I open pzz.by', function () {
    return homePage.open();
});

When('I select {string}', function (string) {
    return homePage.pizzaSection.clickElementByText(string);
});

When('I choose {string} pizza size', function (pizzaSize) {
    if (pizzaSize === "Стандартная") {
        return pizzaPage.sizes.collection.get(1).click();
    } else if (pizzaSize === "Тонкое тесто 36 см") {
        return pizzaPage.sizes.collection.get(2).click();
    } else if (pizzaSize === "Большая") {
        return pizzaPage.sizes.collection.get(0).click();
    } else {
        throw new Error("Invalid Pizza size has been specified");
    }

});

When('I move current pizza to the cart', function () {
    return pizzaPage.clickOnMoveToCartButton();
});

When('I choose {string} delivery mode', function (string) {
    return pizzaPage.deliveryModes.clickElementByText(string);
});

When('I choose {string} address', function (string) {
    return pizzaPage.addresseOfPickups.clickElementByText(string);
});

When('I navigate to {string} using navigation menu', function (navigationLinkName) {
    return homePage.Header.navigationLinks.clickElementByText(navigationLinkName);
});

When('I open cart', function () {
    return cartPage.open();
});

When("I close current pizza page", function () {
    return pizzaPage.closePizzaPage();
});

When("I delete first pizza from the cart", function () {
    return cartPage.deleteFirstPizza();
});