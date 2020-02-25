package runner;


import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
        features = {"src/main/java/feature/Run.feature", "src/main/java/feature/TimeSheet.feature"},
        glue="steps",  
        monochrome=true,  
        plugin ={"pretty:target/cucumber.pretty","html:reports/test-report","json:target/cucumber.json","progress:target/cucumber.progress"})
       

	public class runner extends AbstractTestNGCucumberTests {
	
}
