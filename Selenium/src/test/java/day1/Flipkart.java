package day1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

public class Flipkart {
  @Test
  public void f() throws InterruptedException {
		// TODO Auto-generated method stub
System.setProperty("webdriver.chrome.driver","D:\\Eclipse\\Selenium\\driverNew\\chromedriver.exe");
WebDriver driver = new ChromeDriver();
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
driver.get("https://www.flipkart.com/");
driver.findElement(By.xpath("//button[@class='_2AkmmA _29YdH8']")).click();
WebElement ele1 = driver.findElement(By.xpath("(//span[text()='Electronics'])"));
Actions mover = new Actions(driver);
mover.moveToElement(ele1);
//driver.findElement(By.xpath("(//a[text()='Mi'])[1]")).click();


}
}