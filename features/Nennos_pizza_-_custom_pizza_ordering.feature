Feature: Nennos pizza - Custom pizza ordering

  Background: 
    Given I am on the main page in Nenno's pizza application
    And I can see the "+" button on the main page

  Scenario: Ordering a custom pizza
    When I click on the "+" button
    And I add Salami to the pizza
    And I add Mushrooms to the pizza
    And I add Ricci to the pizza
    Then I check if I see the price of the custom pizza 
    When I add this pizza to the cart
    And I check out the pizza
    Then I check if i see the "Tank you for your order" message
    And I navigate back to the home page