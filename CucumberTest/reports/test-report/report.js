$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/TimeSheet.feature");
formatter.feature({
  "line": 2,
  "name": "Time Sheet",
  "description": "",
  "id": "time-sheet",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login Page for timesheet",
  "description": "",
  "id": "time-sheet;login-page-for-timesheet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Timesheet URL",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the Timesheet Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter the Timesheet Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Timesheet Login",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.open_the_Browser()"
});
formatter.result({
  "duration": 5781682385,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_URL()"
});
formatter.result({
  "duration": 1850138950,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Username()"
});
formatter.result({
  "duration": 135299352,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Password()"
});
formatter.result({
  "duration": 159074908,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet_Login()"
});
formatter.result({
  "duration": 110488786,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "TimeSheet",
  "description": "",
  "id": "time-sheet;timesheet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Click on Add Button"
    },
    {
      "line": 16,
      "value": "#When Enter the Time IN"
    },
    {
      "line": 17,
      "value": "#Then Click on TimeSheet Save button"
    },
    {
      "line": 18,
      "value": "# And Close the Pop-up"
    }
  ],
  "line": 19,
  "name": "Click on Edit button",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Select the project Name",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Select the Task type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select the Mode of Request",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter the Task Name",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the Start Time",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter the End Time",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on Task Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet()"
});
formatter.result({
  "duration": 2279719357,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Edit_button()"
});
formatter.result({
  "duration": 554026642,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.select_the_project_Name()"
});
formatter.result({
  "duration": 283200341,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.select_the_Task_type()"
});
formatter.result({
  "duration": 182180935,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.select_the_Mode_of_Request()"
});
formatter.result({
  "duration": 130775329,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Task_Name()"
});
formatter.result({
  "duration": 1050202342,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Start_Time()"
});
formatter.result({
  "duration": 3176295168,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_End_Time()"
});
formatter.result({
  "duration": 211055092,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Task_Save_button()"
});
formatter.result({
  "duration": 253288730,
  "status": "passed"
});
});