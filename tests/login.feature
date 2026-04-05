Feature: Login Feature

  Scenario: Valid login
    Given I launch the application
    When I login with valid credentials
    Then I should see the inventory page