# sample-web-test-automation

This project is useful example of Cypress and integration with Cucumber BDD Framework.

Prerequisites
1. Install VSCode in system
2. Open Terminal and type 'git clone https://github.com/Revanth-Munirathinam/sample-web-test-automation'
3. cd sample-web-test-automation
4. npm install


Run Some Sample Tests
To execute the entire test suite in local development,

Procedure:
       Type 'npm run cypresstest' and press enter. And the script will start executing.
       
Tests are place in *.feature files in the cypress/integration/*.feature directory. A typical test will look similar to this:
Feature: As a customer, I should be able to authorize Payment
@order @smoke

Scenario: As a customer, I should be able to authorize Payment
  Given I launch web application
    And I wait for home page to load
  When I enter mobile number as "1234567" and choose "Kotak" bank
  Then I validate complete EMI transaction page is loaded and enter valid mobile number
  When I validate select EMI transaction page is loaded and choose tenure of emi as option 1
    And I validate transaction confirmation page is loaded and enter the card number as 1234
  Then I validate confirm transaction section is loaded and enter valid otp as 777777 then click on confirm
    And I validate payment is successful

Test Reports:
  After the execution is completed, if the script is failed/passed,we can see the report under cypress/results/mochawesome*.json and we can see the video evidence under cypress/order.feature.mp4
  After the execution is completed, if the script is failed, we can see the screenshot of particular failure section under cypress/screenshots