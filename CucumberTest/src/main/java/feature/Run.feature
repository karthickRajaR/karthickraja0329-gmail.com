Feature: Login Page

  Scenario Outline: Login to the Application
    Given Open the browser
    And Enter the URL
    When Enter the UserName as <UserName>
    And Enter the Password as <PassWord>
    And Click on Login Button
    Then Click on Quotes module
    And Click on search button
    
    Examples:
   |UserName|PassWord|
   |karthik|Chembian2|
   |bmuthusamy|Chemtech@21|