import DemoSelenium from '../pageObjects/demoPage'

describe('Automation test for alerts and modals', function () {

    const alertModals = new DemoSelenium();

    it('One that checks one alerts and modals', function () {

        cy.visit('/')

        alertModals.noThanksOnPopUpModal().click();
        alertModals.alertAndModalsTab().click();
        alertModals.javaScriptAlert().click();
        alertModals.jsAlertBox().click();

        //Validting alert text
        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am an alert box!');
          }); 

        cy.on('window:confirm', () => true).should('be.visible');
        //cy.get('#result').contains('You successfuly clicked an alert')
    
    })
    


})