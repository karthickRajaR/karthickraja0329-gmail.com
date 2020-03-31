Feature: Time Sheet

  @tag
  Scenario: Login Page for timesheet
    Given Open the Browser
    And Enter the Timesheet URL
    When Enter the Timesheet Username
    And Enter the Timesheet Password
    Then Click on Timesheet Login

  @tag1
  Scenario Outline: Add In-Time TimeSheet
    #Given Click on Timesheet
    #And Click on Add Button
    #When Enter the Time IN as <inTime>
    #Then Click on TimeSheet Save button
    #And Close the Pop-up
    #And Click on leave Application
    Given Click on Timesheet
    And Click on Edit button
    
    Examples:
    |inTime|
    |9.22|
    

  @tag2
  Scenario Outline: Add the Task
    When Select the project Name as <ProjectName>
    And Select the Task type as <TaskType>
    And Select the Mode of Request as <MOR>
    And Enter the Task Name as <Task>
    And Enter the Start Time as <Start>
    And Enter the End Time as <End>
    Then Click on Task Save button

    Examples: 
      | ProjectName | TaskType   | MOR    | Task                    | Start   | End     |
      | Zion        | QA Testing | TFS No | Scrum meeting for Views application and analysing the mail and TFS updates, mom | 9.30 am | 11.30 pm |

  @tag3
  Scenario Outline: Add the Next Task
    Given Click on Add Task
    When Select the Next project Name as <ProjectName>
    And Select the Next Task type as <TaskType>
    And Select the Next Mode of Request as <MOR>
    And Enter the Next Task Name as <Task>
    And Enter the Next Start Time as <Start>
    And Enter the Next End Time as <End>
    Then Click on Next Task Save button

    Examples: 
      | ProjectName | TaskType   | MOR    | Task                                                             | Start    | End      |
      | Zion        | QA Testing | TFS No | Data Management  - PBI 71627 -Testing has been done in SIT & Prod for Test Suite : Data Management_PVT_20200310  | 02.00 am | 04.00 pm |
      | Zion        | QA Testing | TFS No | Analysing v3.4.0                                 | 5.15 pm  | 7.00 pm  |
      #| Zion        | QA Testing | TFS No | Bug ID 71337 has been created in TFS                                                                      | 11.00 am | 11.30 am |
  #Scenario: 
    #Then Close the Broser
