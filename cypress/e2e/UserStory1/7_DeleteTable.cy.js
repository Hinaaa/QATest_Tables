const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const helperObj= require("../../pagefactory/helper");
const assertionsValidations= require("../../pagefactory/outputAssertions");
let i=0;

require('cypress-xpath')

describe('7_DeleteTable', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, defined in fixture
          cy.visit(pageURL) //visit URL
          cy.contains("Create table").should('be.visible') //Validate text on home page
       
          
        })
      });
    Object.keys(data)
        .forEach(function(tc,i){
            const testData=data[i];
            it(testData.tc,function() {
                execute(testData)
            })
        })
})
function execute(data) {
  let tableName=  Math.random().toString(36).substr(2, 8);
  helperObj.createTable(tableName,data.hashAttributeName,data.hashAttributeType,data.rangeAttributeName,data.rangeAttributeType,data.readCapacityUnits,data.writeCapacityUnits)
  assertionsValidations.validateDataExistSuccessfullyCreated(tableName) //validate tabke created successful

  //click Delete one table
  //click delete all in case exisixtng table exists for this scenarion
  helperObj.deleteAllTable()

  helperObj.deleteTable()
  assertionsValidations.validateTableNotExists(tableName) //validate tabke created successful

}
  
