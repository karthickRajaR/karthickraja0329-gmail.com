$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/TimeSheet.feature");
formatter.feature({
  "line": 1,
  "name": "Time Sheet",
  "description": "",
  "id": "time-sheet",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page for timesheet",
  "description": "",
  "id": "time-sheet;login-page-for-timesheet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the Timesheet URL",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the Timesheet Username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the Timesheet Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Timesheet Login",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.open_the_Browser()"
});
formatter.result({
  "duration": 5409258958,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_URL()"
});
formatter.result({
  "duration": 4143093866,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Username()"
});
formatter.result({
  "duration": 110287718,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Password()"
});
formatter.result({
  "duration": 118083630,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet_Login()"
});
formatter.result({
  "duration": 94406165,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Add In-Time TimeSheet",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Given Click on Timesheet"
    },
    {
      "line": 14,
      "value": "#And Click on Add Button"
    },
    {
      "line": 15,
      "value": "#When Enter the Time IN as \u003cinTime\u003e"
    },
    {
      "line": 16,
      "value": "#Then Click on TimeSheet Save button"
    },
    {
      "line": 17,
      "value": "#And Close the Pop-up"
    },
    {
      "line": 18,
      "value": "#And Click on leave Application"
    }
  ],
  "line": 19,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on Edit button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet;",
  "rows": [
    {
      "cells": [
        "inTime"
      ],
      "line": 23,
      "id": "time-sheet;add-in-time-timesheet;;1"
    },
    {
      "cells": [
        "9.22"
      ],
      "line": 24,
      "id": "time-sheet;add-in-time-timesheet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Add In-Time TimeSheet",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Given Click on Timesheet"
    },
    {
      "line": 14,
      "value": "#And Click on Add Button"
    },
    {
      "line": 15,
      "value": "#When Enter the Time IN as \u003cinTime\u003e"
    },
    {
      "line": 16,
      "value": "#Then Click on TimeSheet Save button"
    },
    {
      "line": 17,
      "value": "#And Close the Pop-up"
    },
    {
      "line": 18,
      "value": "#And Click on leave Application"
    }
  ],
  "line": 19,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet()"
});
formatter.result({
  "duration": 2145325857,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Edit_button()"
});
formatter.result({
  "duration": 700658392,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Add the Task",
  "description": "",
  "id": "time-sheet;add-the-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Select the project Name as \u003cProjectName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Select the Task type as \u003cTaskType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Select the Mode of Request as \u003cMOR\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter the Task Name as \u003cTask\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter the Start Time as \u003cStart\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter the End Time as \u003cEnd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Task Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "time-sheet;add-the-task;",
  "rows": [
    {
      "cells": [
        "ProjectName",
        "TaskType",
        "MOR",
        "Task",
        "Start",
        "End"
      ],
      "line": 38,
      "id": "time-sheet;add-the-task;;1"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Scrum meeting for Views application and analysing the mail and TFS updates, mom",
        "9.30 am",
        "11.30 pm"
      ],
      "line": 39,
      "id": "time-sheet;add-the-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Add the Task",
  "description": "",
  "id": "time-sheet;add-the-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Select the project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Select the Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Select the Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter the Task Name as Scrum meeting for Views application and analysing the mail and TFS updates, mom",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter the Start Time as 9.30 am",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter the End Time as 11.30 pm",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Task Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.select_the_project_Name(String)"
});
formatter.result({
  "duration": 454085880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 24
    }
  ],
  "location": "TimeSheetSteps.select_the_Task_type(String)"
});
formatter.result({
  "duration": 168712891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 30
    }
  ],
  "location": "TimeSheetSteps.select_the_Mode_of_Request(String)"
});
formatter.result({
  "duration": 170667018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scrum meeting for Views application and analysing the mail and TFS updates, mom",
      "offset": 23
    }
  ],
  "location": "TimeSheetSteps.enter_the_Task_Name(String)"
});
formatter.result({
  "duration": 1113504453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.30 am",
      "offset": 24
    }
  ],
  "location": "TimeSheetSteps.enter_the_Start_Time(String)"
});
formatter.result({
  "duration": 1229341779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11.30 pm",
      "offset": 22
    }
  ],
  "location": "TimeSheetSteps.enter_the_End_Time(String)"
});
formatter.result({
  "duration": 2244293046,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Task_Save_button()"
});
formatter.result({
  "duration": 128518553,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Select the Next project Name as \u003cProjectName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Task type as \u003cTaskType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select the Next Mode of Request as \u003cMOR\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Task Name as \u003cTask\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next Start Time as \u003cStart\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Enter the Next End Time as \u003cEnd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "time-sheet;add-the-next-task;",
  "rows": [
    {
      "cells": [
        "ProjectName",
        "TaskType",
        "MOR",
        "Task",
        "Start",
        "End"
      ],
      "line": 53,
      "id": "time-sheet;add-the-next-task;;1"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Data Management  - PBI 71627 -Testing has been done in SIT \u0026 Prod for Test Suite : Data Management_PVT_20200310",
        "02.00 am",
        "04.00 pm"
      ],
      "line": 54,
      "id": "time-sheet;add-the-next-task;;2"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Analysing v3.4.0",
        "5.15 pm",
        "7.00 pm"
      ],
      "line": 55,
      "id": "time-sheet;add-the-next-task;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Select the Next project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select the Next Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Task Name as Data Management  - PBI 71627 -Testing has been done in SIT \u0026 Prod for Test Suite : Data Management_PVT_20200310",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next Start Time as 02.00 am",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Enter the Next End Time as 04.00 pm",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Task()"
});
formatter.result({
  "duration": 31693730283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 32
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_project_Name_as_ProjectName(String)"
});
formatter.result({
  "duration": 627448461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Task_type_as_TaskType(String)"
});
formatter.result({
  "duration": 207351048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 35
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Mode_of_Request_as_MOR(String)"
});
formatter.result({
  "duration": 30037173784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data Management  - PBI 71627 -Testing has been done in SIT \u0026 Prod for Test Suite : Data Management_PVT_20200310",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "duration": 1368643286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.00 am",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "duration": 1166163939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04.00 pm",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_End_Time_as_End(String)"
});
formatter.result({
  "duration": 2302255693,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "duration": 154848995,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Select the Next project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select the Next Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Task Name as Analysing v3.4.0",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next Start Time as 5.15 pm",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Enter the Next End Time as 7.00 pm",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Task()"
});
formatter.result({
  "duration": 14598567672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 32
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_project_Name_as_ProjectName(String)"
});
formatter.result({
  "duration": 145909163,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CIS20\u0027, ip: \u002710.77.21.54\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\karamach\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:24572}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 113d0582b70e42ab4c063d0eafdb8fc4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getTagName(RemoteWebElement.java:122)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:44)\r\n\tat steps.TimeSheetSteps.select_the_Next_project_Name_as_ProjectName(TimeSheetSteps.java:176)\r\n\tat ✽.When Select the Next project Name as Zion(src/main/java/feature/TimeSheet.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Task_type_as_TaskType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 35
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Mode_of_Request_as_MOR(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysing v3.4.0",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5.15 pm",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7.00 pm",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_End_Time_as_End(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "status": "skipped"
});
});