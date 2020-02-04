package day1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;


public class RedBus {
	@Test
	public  void redbus() throws InterruptedException {
		// TODO Auto-generated method stub
System.setProperty("webdriver.chrome.driver","D:\\Eclipse\\Selenium\\driverNew\\chromedriver.exe");
WebDriver driver = new ChromeDriver();
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
driver.get("https://www.redbus.in");
//Thread.sleep(10000);
Actions act = new Actions(driver); 
act.sendKeys(Keys.ESCAPE)
.build()
.perform();

WebElement from = driver.findElement(By.xpath("//input[@id='src']"));
from.sendKeys("chennai");
Thread.sleep(1000);
from.sendKeys(Keys.TAB);
WebElement to = driver.findElement(By.xpath("//input[@id='dest']"));
to.sendKeys("Trichy");
Thread.sleep(1000);
to.sendKeys(Keys.TAB);
Thread.sleep(3000);
driver.findElement(By.xpath("(//tr//td[@class='current day'])[2]")).click();
//driver.findElement(By.xpath("(//td[contains(text(),8)])[4]")).click();

driver.findElement(By.xpath(" //div[@class='fl search-box date-box gtm-returnCalendar']")).click();
driver.findElement(By.xpath("(//tr//td[@class='current day'])[2]")).click();
		  
driver.findElement(By.xpath("//button[@id='search_btn']")).click();

Thread.sleep(11000);

driver.findElement(By.xpath("(//li//label[@for='dtAfter 6 pm'])[1]")).click();

driver.findElement(By.xpath("(//li//label[@for='bt_AC'])[1]")).click();
String buses = driver.findElement(By.xpath("//div[@class='f-bold ']")).getText();
System.out.println(buses);
driver.quit();
	}

}
