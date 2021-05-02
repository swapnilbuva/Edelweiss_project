package cucumberframework.runner;


import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = {"src/test/java/cucumberframework/feature/ymail.feature"},
            glue = {"cucumberframework.steps"},
            monochrome = true,
            plugin = {"pretty", "html:target/cucumber", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
    )
 
   
public class MainRunner {

    	}
