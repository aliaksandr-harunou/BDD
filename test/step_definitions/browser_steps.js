const {Given,When,Then,setDefaultTimeout} = require('cucumber');
const {browser} = require('protractor');
const {expect} = require('chai');
const PageFactory = require("../po/pageFactory");
const EC = protractor.ExpectedConditions;
setDefaultTimeout(60000);

Given('I open pzz.by', function () {
    return PageFactory.getPage("Home").open();
});

When('I select {string}', function (string) {
    return PageFactory.getPage("Home").pizzaSection.clickElementByText(string);
});

When('I choose {string} pizza size', function (pizzaSize) {
    if (pizzaSize === "Стандартная") {
        return PageFactory.getPage("Pizza").sizes.collection.get(1).click();
    } else if (pizzaSize === "Тонкое тесто 36 см") {
        return PageFactory.getPage("Pizza").sizes.collection.get(2).click();
    } else if (pizzaSize === "Большая") {
        return PageFactory.getPage("Pizza").sizes.collection.get(0).click();
    } else {
        throw new Error("Invalid Pizza size is specified");
    }

});

When('I move current pizza to the cart', function () {
    return PageFactory.getPage("Pizza").clickOnMoveToCartButton();
});

When('I choose {string} delivery mode', function (string) {
    return PageFactory.getPage("Pizza").deliveryModes.clickElementByText(string);
});

When('I choose {string} address', function (string) {
    return PageFactory.getPage("Pizza").addresseOfPickups.clickElementByText(string);
});

When('I navigate to {string} using navigation menu', function (navigationLinkName) {
    return PageFactory.getPage("Home").Header.navigationLinks.clickElementByText(navigationLinkName);
});

When('I open cart', function () {
    return PageFactory.getPage("Cart").open();
});

When("I wait {int} seconds", function (int) {
    return browser.sleep(int * 1000);
});

When("I close current pizza page", function () {
    return PageFactory.getPage("Pizza").closePizzaPage();
});

When("I delete first pizza from the cart", function () {
    return PageFactory.getPage("Cart").deleteFirstPizza();
});

Then("Count of selected pizza should be equal to {int}", async function (expectedCount) {
    let actualCount = await PageFactory.getPage("Cart").getCountOfAddedPizzas();
    expect(expectedCount).to.be.equal(actualCount);
});

Then("Page title should be {string}", async function (expectedTitle) {
    const actualTitle = await browser.getTitle();
    expect(expectedTitle).to.be.equal(actualTitle);
});

When("I wait until pizza sizes are visible", function () {
    const firstAvailableSize = PageFactory.getPage("Pizza").sizes.collection.get(0);
    return browser.wait(EC.visibilityOf(firstAvailableSize), 3000);
});

When("I wait until addresses are visible", function () {
    const secondAvailableAddress = PageFactory.getPage("Pizza").addresseOfPickups.collection.get(1);
    return browser.wait(EC.visibilityOf(secondAvailableAddress), 3000);
});

When("I wait first pizza addresses are visible", function () {
    const fistPizza = PageFactory.getPage("Home").pizzaSection.collection.get(3);
    return browser.wait(EC.visibilityOf(fistPizza), 3000);
});


When("I wait until {string} is visible", async function (pizzaName) {
    const arrayOfElementTexts = await PageFactory.getPage("Home").pizzaSection.collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(pizzaName);
        if (elementToClickIndex === -1) {
            throw new Error(`No pizza with name [${textToClick}] found!`);
        }
    const pizza = PageFactory.getPage("Home").pizzaSection.collection.get(elementToClickIndex);
    return browser.wait(EC.visibilityOf(pizza), 3000);
});