package runner;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
        features = "src/main/java/feature/run.feature", glue="steps",  monochrome=true  )
	public class runner extends AbstractTestNGCucumberTests {
	
}