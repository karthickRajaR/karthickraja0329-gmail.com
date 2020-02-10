package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features="src/main/java/feature/TimeSheet.feature", 
                  glue="steps",
                  monochrome=true)

public class TimeSheetRun extends AbstractTestNGCucumberTests{

}
