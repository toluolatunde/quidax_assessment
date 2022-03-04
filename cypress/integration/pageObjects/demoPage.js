class DemoSelenium
{

   noThanksOnPopUpModal()
   {
      return cy.get('.at-cm-no-button')
   }
   
   inputFormstab()
   {
      return cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle')
   }
  
   selectCheckBoxDemo()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(2) > a')
   }

   option1Checkbox()
   {
      return cy.get(':nth-child(3) > label > .cb1-element')
   }

   option2Checkbox()
   {
      return cy.get(':nth-child(4) > label > .cb1-element')
   }

   option3Checkbox()
   {
      return cy.get(':nth-child(5) > label > .cb1-element')
   }

   option4Checkbox()
   {
      return cy.get(':nth-child(6) > label > .cb1-element')
   }

   checkButton()
   {
      return cy.get('#check1')
   }

   alertAndModalsTab()
   {
      return cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle')
   }

   javaScriptAlert()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(5) > a')
   }

   jsAlertBox()
   {
      return cy.get(':nth-child(4) > .panel-body > .btn')
   }

   listBoxesTab()
   {
      return cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle')
   }

   selectBootsrap()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(1) > a')
   }

   rightBoxData()
   {
      return cy.get('*[class^="list-group-item"]')
   }

   leftDataList()
   {
      return cy.get('.list-left > .well > .list-group > ')
   }

   rightDataList()
   {
      return cy.get('.list-right > .well > .list-group > ')
   }

   selectItem()
   {
      return cy.get('.list-right > .well > .list-group > :nth-child(1)')
   }
   
   moveToRight()
   {
      return cy.get('.move-right')
   }

   moveToLeft()
   {
      return cy.get('.move-left')
   }

   verifySelectedItem()
   {
      return cy.get('.list-left > .well > .list-group > :nth-child(6)')
   }
   
   

}

export default DemoSelenium;
