Feature: Login Page

    
  Scenario: Login to the Application
  
  Given Open the browser
    And Enter the URL
 When Enter the UserName
    And Enter the Password 
    And Click on Login Button 
   
   
     Scenario Outline: Enter Project Site
    

    Then Click on Quotes module
   And Enter the <value> for site ID
    And Click on search button
    And click on Edit button
    
      
    
     Examples:
     |value|
     |3|
     |4|
     
     Scenario: Close the browser
     
     Given Close the Browser