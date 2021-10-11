package com.herokuapp.theinternet;


import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class ExceptionsTests {

  private WebDriver driver;

  @Parameters({ "browser" })
  @BeforeMethod(alwaysRun = true)
  // so that is always executed, regardless what group it belongs to
  private void setUp(@Optional String browser) {

    switch (browser) {
      case "chrome":
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
        driver = new ChromeDriver();
        break;
      case "firefox":
        System.setProperty("webdriver.gecko.driver", "src/main/resources/geckodriver");
        driver = new FirefoxDriver();
        break;
      case "edge":
        System.setProperty("webdriver.edge.driver", "src/main/resources/edgedriver");
        driver = new EdgeDriver();
        break;

      default:
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
        driver = new ChromeDriver();
        break;
    }

    driver.manage().window().maximize();

    // implicit wait
    // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
  }

  @Test
  public void NotVisibleTest() {
    driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
    WebElement startButton = driver.findElement(By.xpath("//div[@id='start']/button"));
    startButton.click();

    WebElement finishElement = driver.findElement(By.id("finish"));

    WebDriverWait wait = new WebDriverWait(driver, 5);
    wait.until(ExpectedConditions.visibilityOf(finishElement));

    String finishText = finishElement.getText();
    Assert.assertTrue(finishText.contains("Hello World"), "Finish text:" + finishText);
  }

  @Test
  public void timeoutTest() {
    driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
    WebElement startButton = driver.findElement(By.xpath("//div[@id='start']/button"));
    startButton.click();

    WebElement finishElement = driver.findElement(By.id("finish"));

    WebDriverWait wait = new WebDriverWait(driver, 2);

    try {
      wait.until(ExpectedConditions.visibilityOf(finishElement));
    } catch (TimeoutException exception) {
      System.out.println("exception catched: " + exception);
      // in case there is a timeout exception, then we are waiting additional 3 seconds
      sleep(3000);
    }

    String finishText = finishElement.getText();
    Assert.assertTrue(finishText.contains("Hello World"), "Finish text:" + finishText);
  }

  @AfterMethod(alwaysRun = true)
  private void tearDown() {
    driver.quit();
  }

  private void sleep(long duration) {
    try {
      Thread.sleep(duration);
    } catch (Exception e) {
      // handle exception
    }
  }
}
