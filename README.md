# QA Automation Test - Tables

**Pre requisites**
Node js -v20.11.1 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestSuit:UserStory1**

**TestCases**

1. 1_createTable.cy
2. 2_validateErrorMessageOnTableCreationWhenEnterTableNameWithTheSpace
3. 3_validateErrorMessageOnTableCreationWhenEnterTableNameSameWhichAlreadyExists
4. 4_CreateTableWithoutNonMandetoryFields.cy.js
5. 5_ValidateErrorMessageOnDirectlyClickingSubmitButton
6. 6_DeleteAllTables
7. 7_DeleteTable
8. 8_NavigateIntoTableValidateTabs.cy

Please Note: More test scenarios can be created like Delete all when no data exists, multiple rows delete etc, but considering the time frame these created

**Folder structure**

Cypress/e2e/UserStory1-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this, including assertions in seperate file

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data was passed in json format

cypress/outputData-: The testdata for output which is passed to the spec file, the data was passed in json format

**Approaches and automation concept used**

1. Page object model approach followed
2. Centralized approach for reusability like centralized URL
3. Assertions has been placed for validation in seperate file
4. Comments mentioned for better understanding
5. Maintainable and re-usable code
6. Random value generation approach used

Choosing tech stack: Cypress has been used as recommended

