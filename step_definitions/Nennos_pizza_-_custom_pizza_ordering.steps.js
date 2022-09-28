const { I } = inject();

Given('I am on the main page in Nenno\'s pizza application', () => {
    I.see('Nenno\'s Pizza', '~page_title');
});

Given('I can see the "+" button on the main page', () => {
    I.seeElement('~add_custom_pizza_btn');
});

When('I click on the "+" button', () => {
    I.tap("~add_custom_pizza_btn");
});

When('I add Salami to the pizza', () => {
    I.tap('Salami');
});

When('I add Mushrooms to the pizza', () => {
    I.tap('Mushrooms');
});

When('I add Ricci to the pizza', () => {
    I.tap('Ricci');
});

Then('I check if I see the price of the custom pizza', () => {
    I.see('($11.5)', '#com.docler.nennospizza:id/suffix');
});

When('I add this pizza to the cart', () => {
    I.tap('~add_to_cart_btn');
    I.tap('~back_btn');
});

When('I check out the pizza', () => {
    I.waitForElement('~cart_icon', 5);
    I.tap('~cart_icon');
    I.waitForElement('~checkout_btn', 5);
    I.tap('~checkout_btn');
});

Then('I check if i see the "Tank you for your order" message', () => {
    I.waitForElement('~thank_you_text', 5);
    I.see('Thank you for your order', '~thank_you_text');
});

Then('I navigate back to the home page', () => {
    I.waitForElement('~back_to_home_btn');
    I.tap('~back_to_home_btn');
})