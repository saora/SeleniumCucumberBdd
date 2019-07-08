package tests;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/Feature/login"
        ,glue = {"steps"}
        , format = {"pretty","html:test-output"}
)

public class LoginTest {
}
