
const { functionsIn } = require("lodash");
const helperObj = require("../pageobject/supportPage.js");

const sel = new helperObj()

//create table
async function createTable(tablename,hashAttributeName,hashAttributeType,rangeAttributeName,rangeAttributeType,readCapacityUnits,writeCapacityUnits){
    sel.clickCreateTableButton()
    sel.enterTableDataAllFields(tablename,hashAttributeName,hashAttributeType,rangeAttributeName,rangeAttributeType,readCapacityUnits,writeCapacityUnits) //select from currency type
    sel.clickSubmitButton()
   // sel.selectCovertTo(currencyToType) //select from currency type
   // sel.typeAmount(amountToConvert) //enter amount to convert
   // sel.clickConvert() //click convert
}
async function createTableWithoutOptionalFields(tablename,hashAttributeName,hashAttributeType,readCapacityUnits,writeCapacityUnits){
    sel.clickCreateTableButton()
    sel.enterTableDataFieldsWithoutOptionalFields(tablename,hashAttributeName,hashAttributeType,readCapacityUnits,writeCapacityUnits) //select from currency type
    sel.clickSubmitButton()
}
async function clickingSubmit(){
    sel.clickCreateTableButton()
    sel.clickSubmitButton()
}
async function getIntoTable(tablename){
   cy.contains(tablename).click()
}
async function clicktab(tabName){
    cy.contains(tabName).click()
 }
 async function deleteAllTable(){
    cy.contains("Delete all").click()

    cy.on('window:confirm', (text) => {
        expect(text).to.equal('Are you sure you want to delete all tables?'); // Assert the confirmation message 
        return true; // Click on the OK button
      });
 }
 async function deleteTable(){
    cy.contains("Delete").click()
    cy.on('window:confirm', (text) => {
        if (text.includes('Are you sure you want to delete table')) {
          return true; // Click on the OK button
        } 
      });
 }
module.exports={createTable,createTableWithoutOptionalFields,clickingSubmit,getIntoTable,clicktab,deleteAllTable,deleteTable};
