@smoke
@cart
Feature: Cart


Scenario: First pizza should be deleted from the cart
    Given I open pzz.by
    Then Page title should be "Пицца Лисицца"
    When I select "Цыпленок барбекю"
    When I wait until pizza sizes are visible
    When I choose "Стандартная" pizza size
    When I move current pizza to the cart
    When I choose "самовывоз" delivery mode
    When I wait until addresses are visible
    When I choose "Революционная, 17" address
    When I wait 3 seconds
    When I wait until "Ранч пицца" is visible
    When I select "Ранч пицца"
    When I wait until pizza sizes are visible
    When I choose "Большая" pizza size
    When I move current pizza to the cart
    When I open cart
    When I wait 1 seconds
    Then Count of selected pizza should be equal to 2
    And I wait 1 seconds
    When I delete first pizza from the cart
    And I wait 1 seconds
    Then Count of selected pizza should be equal to 1
    And I wait 1 seconds