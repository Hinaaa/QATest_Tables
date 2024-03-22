const data=require('../../testData/data2.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const helperObj= require("../../pagefactory/helper");
const assertionsValidations= require("../../pagefactory/outputAssertions");
let i=0;

require('cypress-xpath')

describe('2_validateErrorMessageOnTableCreationWhenEnterTableNameWithTheSpace', function ()  {
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
  helperObj.createTable(data.tableName,data.hashAttributeName,data.hashAttributeType,data.rangeAttributeName,data.rangeAttributeType,data.readCapacityUnits,data.writeCapacityUnits)
  //Validate Error Message
  assertionsValidations.validateErrorMessage(outputData.errorMessageToBe)
}
  
