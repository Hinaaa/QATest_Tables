
const { functionsIn } = require("lodash");
const supportPage = require("../pageobject/supportPage");

const sel = new supportPage()

async function validateDataExistSuccessfullyCreated(tableName) {

    cy.contains(tableName).should("be.visible")
    }

    async function validateErrorMessage(errorMessageToBe) {
        cy.contains(errorMessageToBe).should("exist")
    }
    
    async function ValidateItemsTabs(tabName, tableName) {
    // Ensure the tab name is visible
    cy.contains(tabName).should("be.visible");
  
    // Ensure the table name matches the expected value
    cy.get('[name="queryableSelection"]').invoke('text').then((tableText) => {
      expect(tableText.trim()).to.eq(tableName);
    });
  
    // Ensure the "Add Filter" button exists
    cy.get('[id="add-filter"]').should('exist').and('contain.text', 'Add Filter');
  
    // Ensure the "Search" button exists
    cy.contains('Search').should('exist');
  }
  
  async function ValidateGetsTabs(tabName, tableName) {
    // Ensure the tab name is visible
    cy.contains(tabName).should("be.visible");
  
  
      //Validate table data
    cy.contains("Auto hash attribute name1").should("be.visible");
      //Validate table data
    cy.contains('Auto range Attribute name1').should("be.visible");
  }
 
  async function ValidateMetaTabs(tabName) {
    // Ensure the tab name is visible
    cy.contains(tabName).should("be.visible");
    // Validate element with id "deleteTable" exists
    cy.get('#deleteTable').should('exist');
  }
  
  async function validateTableNotExists(tabName) {
    // Ensure the tab name is visible
    cy.contains(tabName).should("not.exist");
  }
  

module.exports = { validateDataExistSuccessfullyCreated, validateErrorMessage,ValidateItemsTabs,ValidateGetsTabs,ValidateMetaTabs,validateTableNotExists};
