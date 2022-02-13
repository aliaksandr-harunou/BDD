const {When,setDefaultTimeout} = require('@cucumber/cucumber');
const {browser} = require('protractor');
const PageFactory = require("../po/pageFactory");
const homePage = PageFactory.getPage("Home");
const pizzaPage = PageFactory.getPage("Pizza");
const EC = protractor.ExpectedConditions;
setDefaultTimeout(60000);

When("I wait until {string} is visible", async function (pizzaName) {
    const arrayOfElementTexts = await homePage.pizzaSection.collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(pizzaName);
        if (elementToClickIndex === -1) {
            throw new Error(`No pizza with name [${textToClick}] found!`);
        }
    const pizza = homePage.pizzaSection.collection.get(elementToClickIndex);
    return browser.wait(EC.visibilityOf(pizza), 3000);
});

When("I wait first pizza addresses are visible", function () {
    const fistPizza = homePage.pizzaSection.collection.get(3);
    return browser.wait(EC.visibilityOf(fistPizza), 3000);
});

When("I wait until addresses are visible", function () {
    const secondAvailableAddress = pizzaPage.addresseOfPickups.collection.get(1);
    return browser.wait(EC.visibilityOf(secondAvailableAddress), 3000);
});

When("I wait until pizza sizes are visible", function () {
    const firstAvailableSize = pizzaPage.sizes.collection.get(0);
    return browser.wait(EC.visibilityOf(firstAvailableSize), 3000);
});

When("I wait {int} seconds", function (int) {
    return browser.sleep(int * 1000);
});