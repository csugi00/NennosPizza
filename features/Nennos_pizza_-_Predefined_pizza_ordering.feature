Feature: Nennos pizza - Predefined pizza ordering

  Background: 
    Given I am on the main page in Nenno's pizza application
    And I can see the Nenno pizza title
    And I see ricci pizza title
    And I see ricci pizza contents
    And I see ricci pizza price

  Scenario: Ordering a predefined pizza from main page
    When I select the ricci pizza
    Then I can see the name of selected pizza
    And I can see the picture of selected pizza
    And I can see the ingredients title
    And I can see mozzarella is checked in the list
    And I can see Ricci is checked in the list
    When I add the pizza to the cart
    And I navigate back to the main page
    Then I check if the "1" is appeared
    When I open the chart
    Then I can see the selected pizza
    And I can see the selected pizza price
    When I delete the pizza from cart
    Then I check if its disappeared
    And I navigate back to the main page
