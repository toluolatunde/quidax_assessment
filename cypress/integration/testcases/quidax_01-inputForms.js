import DemoSelenium from '../pageObjects/demoPage'

describe('Automated tests for input forms', function () {

    const inputs = new DemoSelenium();

    it('One that checks one of the input forms', function () {

        cy.visit('/');

        inputs.noThanksOnPopUpModal().click();
        inputs.inputFormstab().click();
        inputs.selectCheckBoxDemo().click();

        //Validating all check boxes are unchecked upon page load
        inputs.option1Checkbox().should('not.be.checked');
        inputs.option2Checkbox().should('not.be.checked');
        inputs.option3Checkbox().should('not.be.checked');
        inputs.option4Checkbox().should('not.be.checked');

        inputs.checkButton().should('have.value', 'Check All')
        .and('be.enabled').click();

        //Verify upon clicking on checkall Button all checkBoxes are checked
        inputs.option1Checkbox().should('be.checked');
        inputs.option2Checkbox().should('be.checked');
        inputs.option3Checkbox().should('be.checked');
        inputs.option4Checkbox().should('be.checked');

        inputs.checkButton().should('have.value', 'Uncheck All')
        .and('be.enabled');
    })

    
    

    it("Verify uncheckall button works", function () {

        inputs.checkButton().should('have.value', 'Uncheck All')
        .and('be.enabled').click();

        //Validating all check boxes are unchecked upon page load
        inputs.option1Checkbox().should('not.be.checked');
        inputs.option2Checkbox().should('not.be.checked');
        inputs.option3Checkbox().should('not.be.checked');
        inputs.option4Checkbox().should('not.be.checked');

    })


})