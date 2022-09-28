const { I } = inject();
var chai = require('chai');  
var assert = chai.assert; 

Given('I can see the Nenno pizza title', () => {
  I.see('Nenno\'s Pizza', '~page_title');
});

Given('I see ricci pizza title', () => {
  I.seeElement('~ricci_pizza_title');
});

Given('I see ricci pizza contents', () => {
  I.seeElement('~ricci_pizza_contents');
});

Given('I see ricci pizza price', () => {
  I.seeElement('~ricci_pizza_price');
});

When('I select the ricci pizza', () => {
  I.waitForElement('~ricci_pizza_details_btn', 5);
  I.tap('~ricci_pizza_details_btn');
});

Then('I can see the name of selected pizza', () => {
  I.waitForElement('~page_title', 5);
  I.see('Ricci', '~page_title');
});

Then('I can see the picture of selected pizza', () => {
  I.seeElement('~pizza_image');
});

Then('I can see the ingredients title', () => {
  I.see('Ingredients', '#com.docler.nennospizza:id/title');
});

Then('I can see mozzarella is checked in the list', async () => {
  // TODO there is no id or activity id to locate
  const mozzarellaCheckbox = "//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.CheckBox";
  I.seeElement(mozzarellaCheckbox);
  const mozzarellaCheckboxCheckedValue = await I.grabAttributeFrom(mozzarellaCheckbox, 'checked'); 
  assert.equal(mozzarellaCheckboxCheckedValue, 'true', 'Mozzarella is not checked.');
  I.say('I see mozzarella is checked');
});

Then('I can see Ricci is checked in the list', async () => {
  // TODO there is no id or activity id to locate
  const ricciCheckbox = "//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[6]/android.widget.CheckBox";
  const ricciCheckboxCheckedValue = await I.grabAttributeFrom(ricciCheckbox, 'checked');
  assert.equal(ricciCheckboxCheckedValue, 'true', 'Mozzarella is not checked.')
  I.say('I see ricci is checked');
});

When('I add the pizza to the cart', () => {
  I.waitForElement('~add_to_cart_btn', 5);
  I.tap('~add_to_cart_btn');
});

Then('I check if the "1" is appeared', () => {
  I.waitForElement('~cart_content_number', 5);
  I.see('1', '~cart_content_number');
});

When('I open the chart', () => {
  I.waitForElement('~cart_icon', 5);
  I.tap('~cart_icon');
});

Then('I can see the selected pizza', () => {
  I.see('Ricci', '~cart_item_1_title');
});

Then('I can see the selected pizza price', () => {
  I.seeElement('~cart_item_1_price');
});

When('I delete the pizza from cart', () => {
  I.waitForElement('~cart_item_1_delete_btn', 5);
  I.tap('~cart_item_1_delete_btn');
});

Then('I check if its disappeared', () => {
  I.dontSeeElement('~cart_item_1_title');
});