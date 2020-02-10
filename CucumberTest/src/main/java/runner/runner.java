package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
        features = "src/main/java/feature/Run.feature", glue="steps",  monochrome=true,  plugin ={"pretty","html:reports/test-report"}
       )
	public class runner extends AbstractTestNGCucumberTests {
	
}
