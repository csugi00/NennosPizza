const { I } = inject();

Given('I am in the shopping cart in Nenno\'s pizza application', () => {
    I.see('Nenno\'s Pizza', '~page_title');
    I.waitForElement('~cart_icon', 5);
    I.tap('~cart_icon');
});

Given('I opened the drinks menu', () => {
    I.waitForElement('~Drinks');
    I.seeElement('~Drinks');
    I.waitForElement('~Drinks');
    I.tap('~Drinks');
});

When('I add a beer', () => {
    I.waitForElement('~add_beer_btn', 5);
    I.tap('~add_beer_btn');
});

When('I go back to the cart', () => {
    I.waitForElement('~back_btn', 5);
    I.tap('~back_btn');
});

Then('I check if i see the beer in the cart', () => {
    I.waitForElement('~cart_item_1_title');
    I.see('Beer');
});

Then('I delete the beer', () => {
    I.waitForElement('~cart_item_1_delete_btn', 5);
    I.tap('~cart_item_1_delete_btn');
});

Then('I navigate back to the main page', () => {
    I.waitForElement('~back_btn', 5);
    I.tap('~back_btn');
});