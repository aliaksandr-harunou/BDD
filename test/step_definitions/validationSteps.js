const {Then,setDefaultTimeout} = require('@cucumber/cucumber');
const {browser} = require('protractor');
const {expect} = require('chai');
const PageFactory = require("../po/pageFactory");
const cartPage = PageFactory.getPage("Cart");
setDefaultTimeout(60000);


Then("Page title should be {string}", async function (expectedTitle) {
    const actualTitle = await browser.getTitle();
    expect(expectedTitle).to.be.equal(actualTitle);
});

Then("Count of selected pizza should be equal to {int}", async function (expectedCount) {
    let actualCount = await cartPage.getCountOfAddedPizzas();
    expect(expectedCount).to.be.equal(actualCount);
});