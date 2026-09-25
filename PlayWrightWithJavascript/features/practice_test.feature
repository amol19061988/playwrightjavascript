@regression
Feature: FE002- Enter User Login Details

  Scenario Outline: TC002 Enter User-1 details
    Given Launch application url
   # When User Enters name "Amol"
   # And User Enters email "bhagat@gmail.com"
    When User Enters name "<user_name>"
    And User Enters email "<e_mail_Id>"

    Examples:
      | user_name | e_mail_Id        |
      | "Tester"  | "amol@gmail.com" |
      | "FIS"     | "FIS@gmail.com"  |


