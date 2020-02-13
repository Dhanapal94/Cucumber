Feature: Customers

  Background: Below are the common steps for all the scenarios
    Given User launches browser
    And User navigates to nocommerce  admin website "https://admin-demo.nopcommerce.com/"
    Then User provides admin Email as "admin@yourstore.com" and password as "admin"
    And User click on admin Login Button
    Then User should view admin Dashboard page
    Then User click on Customers in menu
    And User click on Customers in the list

@sanity
  Scenario: Add a new Customer
    When User click on Add New button for adding a new customer
    Then Customers info page for adding new customer should display
    And User fills the new customer details
    And click on save button
    Then Success "The new customer has been added successfully" message should display
    And close the browser

@smoke
  Scenario: Search a customer via Email
    When User provides Email id in the Email Box
    And User click on Search Button
    Then Respective searched Email customer should present in a search table
    And close the browser
