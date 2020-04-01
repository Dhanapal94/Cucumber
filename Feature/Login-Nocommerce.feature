Feature: Login Feature

  Background: Below are the steps common for all the scenarios
    Given User launches browser
    And User navigates to nocommerce website "https://demo.nopcommerce.com/"
    Then User clicked Login button in top of the page

@sanity @first
  Scenario: Login with valid credentials
    And User Enters Email as "dd@gmail.com" and Password as "Dhana-07"
    And User clicked on LOG IN button
    Then Page should contains "Log out"

@regression
  Scenario Outline: Login with valid credentials datadriven
    And User Enters Email as "<email>" and Password as "<password>"
    And User clicked on LOG IN button
    Then Page should contains "Log out"

    Examples: 
      | email                     | password |
      | dd@gmail.com              | Dhana-07 |
      | dhanapalinfocse@gmail.com | Dhana-01 |
