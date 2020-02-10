
Feature: Time Sheet

  
  Scenario: Login Page for timesheet
    Given Open the Browser
    And Enter the Timesheet URL
    When Enter the Timesheet Username
    And Enter the Timesheet Password
    Then Click on Timesheet Login

  
  Scenario: TimeSheet
  Given Click on Timesheet
  #And Click on Add Button
  #When Enter the Time IN
  #Then Click on TimeSheet Save button
 # And Close the Pop-up
  Given Click on Edit button
  When Select the project Name
  And Select the Task type
  And Select the Mode of Request
  And Enter the Task Name 
  And Enter the Start Time 
  And Enter the End Time 
  Then Click on Task Save button
  
  