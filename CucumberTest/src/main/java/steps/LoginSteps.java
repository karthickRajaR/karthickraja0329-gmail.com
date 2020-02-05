package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	public static ChromeDriver driver;
	
	@Given("^Open the browser$")
	public void open_the_browser() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}

	@Given("^Enter the URL$")
	public void enter_the_URL() throws Throwable {
		driver.get("https://test-views.vspl.net/Views.Web.DATA/Account/Login");
	}

	@When("^Enter the UserName as (.*)$")
	public void enter_the_UserName(String UserName) throws Throwable {
		driver.findElement(By.xpath("//input[@id='UserName']")).sendKeys(UserName);
	}

	@When("^Enter the Password as (.*)$")
	public void enter_the_Password(String PassWord) throws Throwable {
		driver.findElement(By.id("Password")).sendKeys(PassWord);
	}

	@When("^Click on Login Button$")
	public void click_on_Login_Button() throws Throwable {
		driver.findElement(By.xpath("//button[@type=\"button\"]")).click();
		Thread.sleep(3000);
	}

	@Then("^Click on Quotes module$")
	public void click_on_Quotes_module() throws Throwable {
		driver.findElement(By.xpath("//a[@mattooltip='VPL Sites']")).click();
		Thread.sleep(3000);
	}

	@Then("^Click on search button$")
	public void click_on_search_button() throws Throwable {
		driver.switchTo().frame(0);
		driver.findElement(By.xpath("//div[@class='row']//following::button[text()='Search']")).click();
		driver.quit();
	}

}
