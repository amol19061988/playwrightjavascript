
Feature: FE001- Enter User Login Details
@smoke @sanity
  Scenario: Enter User-1 details

    Given Launch application url
    When User Enters name
    And User Enters emailId
    And User Enters phonenumber
    Then Validate page title