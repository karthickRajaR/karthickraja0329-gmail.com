package day1;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
@Test
public class Login {

	public void run() throws InterruptedException {
		// TODO Auto-generated method stub

        System.setProperty("webdriver.chrome.driver", "D:\\Eclipse\\Selenium\\driverNew\\chromedriver.exe");
		// WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://jqueryui.com");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		
		
	//	driver.findElement(By.xpath("//a[text()='Draggable']")).click();
//		Thread.sleep(3000);
//		driver.switchTo().frame(driver.findElement(By.xpath("//div//iframe[@class='demo-frame']")));
//		
		
		/*
		 * try { driver.switchTo().frame(0); } catch (Exception excep) {
		 * System.out.println(excep); } Thread.sleep(3000); 
		 * Actions act = new
		 * Actions(driver); WebElement drag =
		 * driver.findElement(By.xpath("//div[@id='draggable']"));
		 * act.dragAndDropBy(drag, 150, 10).perform();
		 */
		 
		 

		driver.findElement(By.xpath("//a[text()='Selectable']")).click();
		//driver.switchTo().frame(driver.findElement(By.className("demo-frame")));
		driver.switchTo().frame(0);
		//driver.findElements(By.xpath("//ul[@id='Selectable']/li
		List<WebElement> list = driver.findElements(By.xpath("//ol[@id='selectable']/li"));
		Actions act = new Actions(driver);
	    
		for (int i = 0; i < list.size(); i++) {
			
			/*
			 * if(i==0) { act.click(list.get(i)).perform();} else
			 */ 
				if(i<=3) {
				act.keyDown(Keys.CONTROL).click(list.get(i)).perform();
			System.out.println(list.get(i).getText());}
		}

	}

}
