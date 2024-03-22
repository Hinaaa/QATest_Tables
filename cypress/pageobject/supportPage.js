
class  supportPage{

    //Page for Element IDs and actions

    clickCreateTableButton() {
        cy.get('[href="/create-table"]').click().wait(1000)
    }
    //form
    enterTableDataAllFields(tablename,hashAttributeName,hashAttributeTypeValue,rangeAttributeName,rangeAttributeType,readCapacityUnits,writeCapacityUnits) {

        cy.get('[id="TableName"]').type(tablename)
        cy.get('[id="HashAttributeName"]').type(hashAttributeName)
        cy.get('[name="HashAttributeType"]').select(hashAttributeTypeValue) 
        cy.get('[id="RangeAttributeName"]').type(rangeAttributeName)
        cy.get('[name="RangeAttributeType"]').select(rangeAttributeType)
        cy.get('[id="ReadCapacityUnits"]').clear().type(readCapacityUnits)
        cy.get('[id="WriteCapacityUnits"]').clear().type(writeCapacityUnits)
    }
    enterTableDataFieldsWithoutOptionalFields(tablename,hashAttributeName,hashAttributeTypeValue,readCapacityUnits,writeCapacityUnits) {

        cy.get('[id="TableName"]').type(tablename)
        cy.get('[id="HashAttributeName"]').type(hashAttributeName)
        cy.get('[name="HashAttributeType"]').select(hashAttributeTypeValue) 
        cy.get('[id="ReadCapacityUnits"]').clear().type(readCapacityUnits)
        cy.get('[id="WriteCapacityUnits"]').clear().type(writeCapacityUnits)
    }
    clickSubmitButton() {
        cy.get('[id="saveButton"]').click() //select
    }
    //old
   /* selectCheckRatesCurrencyFrom(currencyFromType) {
        cy.get('[id="sending-currency"]').click()
        cy.get('[id="sending-currency"]').type(currencyFromType)
        cy.get('[id="sending-currency-listbox"]').within(()=>{
            cy.contains(currencyFromType).first().click()
        })
    }
    checkRatesGetCurrencyRate(currentRate) {
        cy.contains('Text','Rate').next().next().then(($text1) => {            
            currentRate = $text1.text();
            return currentRate
          });
    }
*/
}
module.exports = supportPage;