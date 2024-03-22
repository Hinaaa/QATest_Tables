const data=require('../../testData/data3.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const helperObj= require("../../pagefactory/helper");
const assertionsValidations= require("../../pagefactory/outputAssertions");
let i=0;

require('cypress-xpath')

describe('8_NavigateIntoTableValidateTabs', function ()  {
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
//let tableName="Auto Table creation1", hashAttributeName="Auto hash attribute name1", hashAttributeType="String",rangeAttributeName="Auto range Attribute name1",rangeAttributeType="String",readCapacityUnits="3",writeCapacityUnits ="3"
  helperObj.createTable(tableName,data.hashAttributeName,data.hashAttributeType,data.rangeAttributeName,data.rangeAttributeType,data.readCapacityUnits,data.writeCapacityUnits)
  assertionsValidations.validateDataExistSuccessfullyCreated(tableName) //validate tabke created successfully

  //get into the table
  helperObj.getIntoTable(tableName)
  //validate default Item tab data
  assertionsValidations.ValidateItemsTabs(data.tabName1, tableName) //validate Item tab

  //click and validate Get tab
helperObj.clicktab(data.tabName2)
assertionsValidations.ValidateGetsTabs(data.tabName2) //validate Get tab

  //click and validate Meta tab
helperObj.clicktab(data.tabName3)
assertionsValidations.ValidateGetsTabs(data.tabName3) //validate Meta tab

}
  
