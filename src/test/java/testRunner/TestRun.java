package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)				
@CucumberOptions(
		features= {"./Feature"},
		glue={"stepDefinitions"},
	    plugin = {"pretty", "html:target/cucumber-html","json:target/cucumber-json/cucumber.json"},
		dryRun=false,
		monochrome=true,
		tags= {"@sanity,@smoke"}
		)

public class TestRun {
	
	

}
