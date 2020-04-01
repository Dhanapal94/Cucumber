Feature: Admin Login 
 
 @first @sanity
 Scenario: Admin login with valid credentials
    Given User launches browser
    And User navigates to nocommerce  admin website "https://admin-demo.nopcommerce.com/"
    Then User provides admin credentails to login
    |Username|Password|
    |admin@yourstore.com|admin|
    |admin@your.com|admin|
    And User click on admin Login Button
    Then User should view admin Dashboard page
    Then User checks the mail "admin"
    Then first name of the user is "Dhanapal Karthik"
