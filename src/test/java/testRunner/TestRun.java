package testRunner;

import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.ExtentCucumberFormatter;
import com.vimalselvam.cucumber.listener.Reporter;

import Utilities.ReadConfig;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import org.junit.*;



@RunWith(Cucumber.class)				
@CucumberOptions(
		features= {"./Feature\\"},
		glue={"stepDefinitions"},
		plugin = {"pretty", "html:target/cucumber-html","json:target/cucumber-json/cucumber.json"},
		dryRun=false,
		monochrome=true
		//tags= {"@sanity,@regression"}
		)

public class TestRun {
	

	
}
