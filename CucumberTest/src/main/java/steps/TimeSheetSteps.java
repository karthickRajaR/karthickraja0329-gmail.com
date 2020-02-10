package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TimeSheetSteps {
public static ChromeDriver driver;

	@Given("^Open the Browser$")
	public void open_the_Browser() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
	     driver = new ChromeDriver();
	     driver.manage().window().maximize();
	     driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);  
	    
	}


	
	@Given("^Enter the Timesheet URL$")
	public void enter_the_Timesheet_URL() throws Throwable {
		driver.get("http://ibm-1:1212/CIS-United/(S(kdosmivvxg5ju3axmbfo4f45))/Home/Login.aspx");
	    
	}

	@When("^Enter the Timesheet Username$")
	public void enter_the_Timesheet_Username() throws Throwable {
	    
		driver.findElement(By.xpath("(//div[@id='loginbg']//following::input)[1]")).sendKeys("karamach");
	}

	@When("^Enter the Timesheet Password$")
	public void enter_the_Timesheet_Password() throws Throwable {
	    
		driver.findElement(By.xpath("(//div[@id='loginbg']//following::input)[2]")).sendKeys("karthick@123");
	}

	@Then("^Click on Timesheet Login$")
	public void click_on_Timesheet_Login() throws Throwable {
		driver.findElement(By.xpath("(//div[@id='loginbg']//following::input)[3]")).click();
	    
	}
	
	@Given("^Click on Timesheet$")
	public void click_on_Timesheet() throws Throwable {
		driver.findElement(By.xpath("(//tr[@class='tdHoverHand']//td)[2]")).click();
	    
	}

	@Given("^Click on Add Button$")
	public void click_on_Add_Button() throws Throwable {
	   driver.findElement(By.xpath("//input[@value='Add']")).click();
	    
	}

	@When("^Enter the Time IN$")
	public void enter_the_Time_IN() throws Throwable {
		   
	    driver.findElement(By.xpath("(//input[@class='watermarked'])[1]")).sendKeys("9.20");
	}

	@Then("^Click on TimeSheet Save button$")
	public void click_on_TimeSheet_Save_button() throws Throwable {
	   driver.findElement(By.xpath("(//td[@class='taR pTop5']//following::input)[16]")).click();
	    
	}

	@Then("^Close the Pop-up$")
	public void close_the_Pop_up() throws Throwable {
	 driver.findElement(By.xpath("//input[@title='Close']")).click();
	    
	}

	@Given("^Click on Edit button$")
	public void click_on_Edit_button() throws Throwable {
	   
	    driver.findElement(By.xpath("(//tr[@class='gridHeaderBG']//following::input)[1]")).click();
	}

	@When("^Select the project Name$")
	public void select_the_project_Name() throws Throwable {
	   WebElement projectList = driver.findElement(By.xpath("(//td[@class='taL']//select)[3]"));
	   
	   Select drop = new Select(projectList);
	   drop.selectByVisibleText("Zion");
	    
	}

	@When("^Select the Task type$")
	public void select_the_Task_type() throws Throwable {
		WebElement TaskList = driver.findElement(By.xpath("(//td[@class='taL']//select)[4]"));
		   
		   Select drop = new Select(TaskList);
		   drop.selectByVisibleText("Team Meeting");
		    
	    
	}

	@When("^Select the Mode of Request$")
	public void select_the_Mode_of_Request() throws Throwable {
	   
		WebElement MoRList = driver.findElement(By.xpath("(//td[@class='taL']//select)[5]"));
		   
		   Select drop = new Select(MoRList);
		   drop.selectByVisibleText("GTM");
		    
	    
	}

	@When("^Enter the Task Name$")
	public void enter_the_Task_Name() throws Throwable {
	   String scrum = "Scrum meeting for Views application and analysing the mail and TFS updates";  
	   
	    driver.findElement(By.xpath("(//input[@class='txtBox'])[3]")).sendKeys(scrum);
	}

	@When("^Enter the Start Time$")
	public void enter_the_Start_Time() throws InterruptedException  {
	   
	    driver.findElement(By.xpath("(//input[@class='watermarked'])[3]")).sendKeys("9.30 am");
	    Thread.sleep(3000);
	    
	}

	@When("^Enter the End Time$")
	public void enter_the_End_Time() throws Throwable {
		
		WebElement end =  driver.findElement(By.xpath("(//input[@class='watermarked'])[3]"));
		end.sendKeys(Keys.TAB);
		end.sendKeys("10.30 am");
		
	    
	}

	@Then("^Click on Task Save button$")
	public void click_on_Task_Save_button() throws Throwable {
	   
	    driver.findElement(By.xpath("//td[@class='taL']//input[@type='image'][1]")).click();
	}
	
}
