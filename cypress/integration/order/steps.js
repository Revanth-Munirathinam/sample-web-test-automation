
import { Given, Then,When } from 'cypress-cucumber-preprocessor/steps';

/* Launch Web Application*/
Given('I launch web application', () => {
    cy.visit(Cypress.env('url'))
});

/* I wait for home page to load*/
When('I wait for home page to load', () => {
    // // Validate all the Table exists in DOM
    cy.get('#myForm').should('have.length', 1)
    cy.get('#continueBtn').should('have.length', 1)
});

/* I enter mobile number {int} and choose {string} bank*/
When('I enter mobile number as {string} and choose {string} bank', (mobileNumber, bank) => {
    // Validate all the Table exists in DOM
    cy.get('#CI').should('have.length', 1)
    cy.get('#bank_code_fm').should('have.length', 1)

    // Enter mobile number & choose the bank
    cy.get('#CI').type(mobileNumber)
    cy.get('#bank_code_fm').select(bank)
    // Click on Continue Button
    cy.get('#continueBtn').click()
});

/* I validate complete EMI transaction page is loaded and enter valid mobile number*/
Then('I validate complete EMI transaction page is loaded and enter valid mobile number', () => {
    // Validate all the Table exists in DOM
    cy.get('#paymentEnterMobile').should('have.length', 1)

    // Enter valid mobile number
    cy.get('#paymentEnterMobile').type('9988998899')

    // Validate Submit Button exists
    cy.get('#submitButton').should('have.length', 1)

    // Click on Submit Button
    cy.get('#submitButton').click()
});

/* I validate select EMI transaction page is loaded and choose tenure of emi*
 *
*/
When('I validate select EMI transaction page is loaded and choose tenure of emi as option {int}', (option) => {
    // Validate all the Table exists in DOM
    cy.get('#submitButton').should('have.length', 1)
    cy.get('#emi-panel-0').should('have.length', 1)
    cy.get('#emi-panel-1').should('have.length', 1)
    cy.get('#emi-panel-2').should('have.length', 1)
    cy.get('#emi-panel-3').should('have.length', 1)

    // Choose 3 Month EMI option
    cy.get('#emi-panel-' + option).click()

    // Click on Confirm Button
    cy.get('#submitButton').click()
});

/* I validate transaction confirmation page is loaded and enter the card number*/
When('I validate transaction confirmation page is loaded and enter the card number as {int}', (cardNumber) => {
    // Validate all the Table exists in DOM
    cy.get('#cancelTransaction').should('have.length', 1)
    // Enter valid card number
    cy.get('#accountNo').type(cardNumber)
    cy.get('#submitButton').should('have.length', 1)

    // Click on verify Debit card button
    cy.get('#submitButton').click()
});

/*I validate confirm transaction section is loaded and enter valid otp then click on confirm*/
When('I validate confirm transaction section is loaded and enter valid otp as {int} then click on confirm', (otpNumber) => {
    // Validate all the Table exists in DOM
    cy.get('#otp').should('have.length', 1)
    cy.get('#instacredTncCheckbox').should('have.length', 1)
    cy.get('#submitButton').should('have.length', 1)

    // Enter valid otp number
    cy.get('#otp').type(otpNumber)
    // Click on Accept Terms & conditions checkbox
    cy.get('#instacredTncCheckbox').click()

    // Click on submit Button
    cy.get('#submitButton').click()
});


/*I validate payment is successful*/
When('I validate payment is successful', () => {
    // Validate all the Table exists in DOM
    cy.get('[align="center"]').should('have.length', 1)
});