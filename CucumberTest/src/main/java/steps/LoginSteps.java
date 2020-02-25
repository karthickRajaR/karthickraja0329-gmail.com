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
	
	@When("^Enter the UserName$")
	public void enter_the_UserName() throws Throwable {
		driver.findElement(By.xpath("//input[@id='UserName']")).sendKeys("karthik");
	}

	@When("^Enter the Password as (.*)$")
	public void enter_the_Password(String PassWord) throws Throwable {
		driver.findElement(By.id("Password")).sendKeys(PassWord);
	}
	
	@When("^Enter the Password$")
	public void enter_the_Password() throws Throwable {
		driver.findElement(By.id("Password")).sendKeys("Chembian2");
	}

	@When("^Click on Login Button$")
	public void click_on_Login_Button() throws InterruptedException  {
		driver.findElement(By.xpath("//button[@type=\"button\"]")).click();
		Thread.sleep(3000);
	}

	@Then("^Click on Quotes module$")
	public void click_on_Quotes_module() throws InterruptedException  {
		driver.findElement(By.xpath("//a[@mattooltip='VPL Sites']")).click();
		Thread.sleep(3000);
	}
		@Then("^Click on VPL Sites$")
		public void click_on_VPLSites_module() throws InterruptedException {
			driver.findElement(By.xpath("//a[@mattooltip='VPL Sites']")).click();
			Thread.sleep(3000);
			
	}
	
	@Then("^Enter the (.*) for site ID$")
	
	
	
	public void enter_the_value_for_site_ID(String value) throws InterruptedException  {
		driver.switchTo().frame(0);
		Thread.sleep(3000);
		driver.findElement(By.xpath("(//label[text()='Site ID']//following::input)[1]")).sendKeys(value);
	   
	}
	@Then("^Click on search button$")
	public void click_on_search_button() throws InterruptedException  {
		
		driver.findElement(By.xpath("//div[@class='row']//following::button[text()='Search']")).click();
		Thread.sleep(3000);
	}
	
	@Then("^click on Edit button$")
	public void click_on_Edit_VPL_Sites() throws InterruptedException {
		driver.findElement(By.xpath("(//tr[@class='ng-scope']//following::img[@title='Click to View'])[1]")).click();
		Thread.sleep(3000);
	}
	@Given("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
	    driver.close();
	}

}
