package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features="src/main/java/feature/TimeSheet.feature", 
                  glue="steps",
                  plugin ={"pretty","html:reports/test-report"},
                  monochrome=true,
                  tags= {"@tag,@tag1,@tag2,@tag3"},
                  dryRun = false)
                   

public class TimeSheetRun extends AbstractTestNGCucumberTests{

}
