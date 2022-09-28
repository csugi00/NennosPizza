Feature: Nennos pizza - Drink ordering

  Background: 
    Given I am in the shopping cart in Nenno's pizza application
    And I opened the drinks menu

  Scenario: Ordering a drink
    When I add a beer
    And I go back to the cart
    Then I check if i see the beer in the cart
    And I delete the beer
    And I navigate back to the main page