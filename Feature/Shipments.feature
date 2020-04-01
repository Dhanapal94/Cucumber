Feature: Shipments

  Background: Below are the common steps for all the scenarios
    Given User launches browser
    And User navigates to nocommerce  admin website "https://admin-demo.nopcommerce.com/"
    Then User provides admin Email as "admin@yourstore.com" and password as "admin"
    And User click on admin Login Button
    Then User should view admin Dashboard page

  Scenario: Shipment Edit
    Given User clicked on Sales in dashboard
    And User clicked on Shipments in sales list
    Then User should view Shipments page
    And User clicked on View button of the maximum Total weight
    Then User Enter the tracking Number as "03041" in tracking box
    And User clicked on Set Tracking Number
    And User clicked on Shipments in sales list

