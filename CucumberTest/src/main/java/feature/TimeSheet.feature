Feature: Time Sheet

  @tag
  Scenario: Login Page for timesheet
    Given Open the Browser
    And Enter the Timesheet URL
    When Enter the Timesheet Username
    And Enter the Timesheet Password
    Then Click on Timesheet Login

  @tag1
  Scenario: Add In-Time TimeSheet
    Given Click on Timesheet
    #And Click on Add Button
    #When Enter the Time IN
    #Then Click on TimeSheet Save button
    #And Close the Pop-up
    #And Click on leave Application
    #Given Click on Timesheet
    And Click on Edit button

  #@tag2
  #Scenario Outline: Add the Task
    #When Select the project Name as <ProjectName>
    #And Select the Task type as <TaskType>
    #And Select the Mode of Request as <MOR>
    #And Enter the Task Name as <Task>
    #And Enter the Start Time as <Start>
    #And Enter the End Time as <End>
    #Then Click on Task Save button
#
    #Examples: 
      #| ProjectName | TaskType     | MOR | Task                                                                      | Start | End   |
      #| Zion        | Team Meeting | GTM | Team meeting for Views application and analysing the mail and TFS updates | 10.00 | 11.00 |

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
      | ProjectName | TaskType   | MOR    | Task                                                                                 | Start    | End      |
      | Zion        | QA Testing | TFS No | Data Management  - PBI  71229 - Test case prepared and Testing has been done in Data | 11.30 am | 01.00 pm |
      | Zion        | QA Testing | TFS No | Regression Testing has been done for Test suite: MR2_Regression_20200221             | 2.00 pm  | 5.30 pm  |
      | Zion        | QA Testing | TFS No | Bug ID 71307, 71306 Logged in TFS                                                    | 5.30 pm  | 6.15 pm  |

      
      Scenario:
      
      Then Close the Broser