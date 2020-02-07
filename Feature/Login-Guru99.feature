Feature: Guru99 Login Feature

  Scenario Outline: Login with valid credentials
    Given User navigates to Guru99 website
    Then  User Entered Valid username
    And  User Entered Valid password
    Then User should successfully login into the application
    