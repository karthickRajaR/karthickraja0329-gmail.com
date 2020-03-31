package steps;

import java.time.Duration;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TimeSheetSteps {

	public static ChromeDriver driver;

	FluentWait<WebDriver> wait;

	public void waitForStaleEle(WebDriver driver, String locator) throws InterruptedException {
		wait = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(30))
				.pollingEvery(Duration.ofMillis(1000)).ignoring(NoSuchElementException.class);
		try {
			wait.until(ExpectedConditions.stalenessOf(driver.findElement(By.xpath(locator))));
		} catch (Exception excep) {
			Thread.sleep(1000);
		}
	}

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

	@When("^Enter the Time IN as (.*)$")
	public void enter_the_Time_IN(String inTime) throws Throwable {
		driver.findElement(By.xpath("(//input[@class='watermarked'])[1]")).sendKeys(inTime);
	}

	@Then("^Click on TimeSheet Save button$")
	public void click_on_TimeSheet_Save_button() throws InterruptedException {
		driver.findElement(By.xpath("(//td[@class='taR pTop5']//following::input[@class='button'])[5]")).click();
		Thread.sleep(3000);

	}

	@Then("^Close the Pop-up$")
	public void close_the_Pop_up() throws Throwable {
		driver.findElement(By.xpath("//input[@title='Close']")).click();

	}

	@Given("^Click on Edit button$")
	public void click_on_Edit_button() throws Throwable {

		driver.findElement(By.xpath("(//tr[@class='gridHeaderBG']//following::input)[1]")).click();
	}

	@When("^Select the project Name as (.*)$")
	public void select_the_project_Name(String Project) throws Throwable {

		WebElement projectList = driver.findElement(By.xpath("(//td[@class='taL']//select)[3]"));
		Select drop = new Select(projectList);
		drop.selectByVisibleText(Project);

	}

	@When("^Select the Task type as (.*)$")
	public void select_the_Task_type(String TaskType) throws Throwable {

		WebElement TaskList = driver.findElement(By.xpath("(//td[@class='taL']//select)[4]"));
		Select drop = new Select(TaskList);
		drop.selectByVisibleText(TaskType);
	}

	@When("^Select the Mode of Request as (.*)$")
	public void select_the_Mode_of_Request(String MOR) throws Throwable {
		WebElement MoRList = driver.findElement(By.xpath("(//td[@class='taL']//select)[5]"));
		Select drop = new Select(MoRList);
		drop.selectByVisibleText(MOR);

	}

	@When("^Enter the Task Name as (.*)$")
	public void enter_the_Task_Name(String Task) throws Throwable {
		// String scrum = "Scrum meeting for Views application and analysing the mail
		// and TFS updates";

		driver.findElement(By.xpath("(//input[@class='txtBox'])[3]")).sendKeys(Task);
	}

	@When("^Enter the Start Time as (.*)$")
	public void enter_the_Start_Time(String Start) throws InterruptedException {

		driver.findElement(By.xpath("(//input[@class='watermarked'])[3]")).sendKeys(Start);
		Thread.sleep(1000);

	}

	@When("^Enter the End Time as (.*)$")
	public void enter_the_End_Time(String End) throws InterruptedException {

		WebElement end = driver.findElement(By.xpath("(//input[@class='watermarked'])[3]"));
		end.sendKeys(Keys.TAB);
		end.sendKeys(End);
		Thread.sleep(2000);
	}

	@Then("^Click on Task Save button$")
	public void click_on_Task_Save_button() throws Throwable {

		driver.findElement(By.xpath("//input[@title='Insert']")).click();
	}

	@Given("^Click on Add Task$")
	public void click_on_Add_Task() throws Throwable {
		waitForStaleEle(driver, "//input[@value='Add Task']");
		driver.findElement(By.xpath("//input[@value='Add Task']")).click();
	}

	// Next Steps

	@Given("^Click on leave Application$")
	public void click_on_leave_Application() throws InterruptedException {
		driver.findElement(By.xpath("//a[text()='Leave Application']")).click();
		Thread.sleep(2000);
	}

	@When("^Select the Next project Name as (.*)$")
	public void select_the_Next_project_Name_as_ProjectName(String Project) throws Throwable {
		WebElement projectList = driver
				.findElement(By.xpath("(//tr[@class='gridHeaderBG']//following::td//select)[3]"));
		Select drop = new Select(projectList);
		drop.selectByVisibleText(Project);

	}

	@When("^Select the Next Task type as (.*)$")
	public void select_the_Next_Task_type_as_TaskType(String TaskType) throws Throwable {
		WebElement TaskList = driver.findElement(By.xpath("(//table[contains(@id,'ProjectTask')]//td//select)[2]"));
		Select drop = new Select(TaskList);
		drop.selectByVisibleText(TaskType);

	}

	@When("^Select the Next Mode of Request as (.*)$")
	public void select_the_Next_Mode_of_Request_as_MOR(String MOR) throws Throwable {
		try {
			WebElement MoRList = driver.findElement(By.xpath("(//table[contains(@id,'ProjectTask')]//td//select)[3]"));
			Select drop = new Select(MoRList);
			drop.selectByVisibleText(MOR);
		} catch (Exception excep) {
			System.out.println("MOR Not Printed");
		}
	}

	@When("^Enter the Next Task Name as (.*)$")
	public void enter_the_Next_Task_Name_as_Task(String Task) throws Throwable {
		try {
			driver.findElement(By.xpath("//input[@class='txtBox']")).sendKeys(Task);	
		} catch (Exception ex) {
			driver.findElement(By.xpath("(//input[@class='txtBox'])[3]")).sendKeys(Task);
		}
	}

	@When("^Enter the Next Start Time as (.*)$")
	public void enter_the_Next_Start_Time_as_Start(String Start) throws Throwable {
		driver.findElement(By.xpath("(//input[@class='watermarked'])[3]")).sendKeys(Start);
		Thread.sleep(1000);

	}

	@When("^Enter the Next End Time as (.*)$")
	public void enter_the_Next_End_Time_as_End(String End) throws Throwable {
		WebElement end = driver.findElement(By.xpath("(//input[@class='watermarked'])[3]"));
		end.sendKeys(Keys.TAB);
		end.sendKeys(End);
		Thread.sleep(2000);

	}

	@Then("^Click on Next Task Save button$")
	public void click_on_Next_Task_Save_button() throws Throwable {
		driver.findElement(By.xpath("//input[@title='Insert']")).click();

	}

	@Then("^Close the Broser$")
	public void close_the_Broser() throws Throwable {
		driver.close();
	}
}
