import DemoSelenium from '../pageObjects/demoPage'

describe('Automation test for list boxes', function () {

  before(function () {
    // runs once before all tests in the block
    cy.clearLocalStorage()
})

  const listBoxes = new DemoSelenium()

  it('One that checks one of the list boxes', function () {

    cy.visit('/')

    listBoxes.noThanksOnPopUpModal().click();

    listBoxes.listBoxesTab().click();
    listBoxes.selectBootsrap().click();
    
    listBoxes.rightBoxData().then(item => {
      expect(item[0]).to.contain.text('bootstrap-duallist ')
      expect(item[1]).to.contain.text('Dapibus ac facilisis in')
      expect(item[2]).to.contain.text('Morbi leo risus')
      expect(item[3]).to.contain.text('Porta ac consectetur ac')
      expect(item[4]).to.contain.text('Vestibulum at eros')
    })

    listBoxes.leftDataList().should('have.length', 5)
    listBoxes.rightDataList().should('have.length', 5)

    //Select and move an item  from the right to the left
    listBoxes.selectItem()
      .should('have.text', 'Cras justo odio').click()
    listBoxes.moveToLeft().click()
    listBoxes.leftDataList().should('have.length', 6);
    listBoxes.rightDataList().should('have.length', 4);

    //Validating item is on the left side
    listBoxes.verifySelectedItem()
      .should('have.text', 'Cras justo odio');

      listBoxes.selectItem()
      .should('not.have.text', 'Cras justo odio').click()


  })


})