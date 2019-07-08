package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LoginSteps {
    WebDriver driver;

    @Given("^User is on Home Page$")
    public void user_is_on_home_page(){
        System.setProperty("webdriver.gecko.driver", "src/main/resources/drivers/windows/geckodriver.exe");
        driver = new FirefoxDriver();
        driver.get("https://login.salesforce.com/?locale=us");
    }

    @When("^Browser has the login url$")
    public void browser_has_the_login_url(){
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Login | Salesforce", title);
    }

    @Then("^User enters Username and Password$")
    public void user_enters_username_and_password(){
        driver.findElement(By.id("username")).sendKeys("ccbdd01@de.org");
        driver.findElement(By.id("password")).sendKeys("test1234");
        driver.findElement(By.id("Login")).click();
    }

/*    @Then("^User click on submit button$")
    public void user_clicks_on_submit_button(){
        driver.findElement(By.id("Login")).click();
    }*/

    @And("^User is on landing page$")
    public void user_is_on_landing_page(){
        String htitle = driver.getTitle();
        System.out.println(htitle);
       Assert.assertEquals("Verify Your Identity | Salesforce",htitle);

    }


}
