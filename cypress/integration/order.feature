Feature: As a customer, I should be able to authorize Payment
@order @smoke

Scenario: As a customer, I should be able to authorize Payment for 6month tenure
  Given I launch web application
    And I wait for home page to load
  When I enter mobile number as "1234567" and choose "Kotak" bank
  Then I validate complete EMI transaction page is loaded and enter valid mobile number
  When I validate select EMI transaction page is loaded and choose tenure of emi as option 1
    And I validate transaction confirmation page is loaded and enter the card number as 1234
  Then I validate confirm transaction section is loaded and enter valid otp as 777777 then click on confirm
    And I validate payment is successful

Scenario: As a customer, I should be able to authorize Payment for 12month tenure
  Given I launch web application
    And I wait for home page to load
  When I enter mobile number as "1234567" and choose "IDFC" bank
  Then I validate complete EMI transaction page is loaded and enter valid mobile number
  When I validate select EMI transaction page is loaded and choose tenure of emi as option 3
    And I validate transaction confirmation page is loaded and enter the card number as 1234
  Then I validate confirm transaction section is loaded and enter valid otp as 777777 then click on confirm
    And I validate payment is successful