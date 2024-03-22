const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData2.json'); 
const helperObj= require("../../pagefactory/helper");
const assertionsValidations= require("../../pagefactory/outputAssertions");
let i=0;

require('cypress-xpath')

describe('3_validateErrorMessageOnTableCreationWhenEnterTableNameSameWhichAlreadyExists.cy', function ()  {
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
let sameTableName = tableName; //for duplication
  helperObj.createTable(tableName,data.hashAttributeName,data.hashAttributeType,data.rangeAttributeName,data.rangeAttributeType,data.readCapacityUnits,data.writeCapacityUnits)
  //Validate table created
  assertionsValidations.validateDataExistSuccessfullyCreated(tableName) //validate tabke created successfully

  //again try to create table with same name
  helperObj.createTable(sameTableName,data.hashAttributeName,data.hashAttributeType,data.rangeAttributeName,data.rangeAttributeType,data.readCapacityUnits,data.writeCapacityUnits)
  //Validate Error Message
  assertionsValidations.validateErrorMessage(outputData.errorMessageToBe)



  // helperObj.createTable(tableName,hashAttributeName,hashAttributeType,rangeAttributeName,rangeAttributeType,readCapacityUnits,writeCapacityUnits)
  //Validate  coonvert button disabled on entering amount = Alphabetic Characters
//  assertionsValidations.covertButtonDisabled()
}
  
