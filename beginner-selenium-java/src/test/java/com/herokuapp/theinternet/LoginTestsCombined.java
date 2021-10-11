package com.herokuapp.theinternet;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class LoginTestsCombined {

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

  @AfterMethod(alwaysRun = true)
  private void tearDown() {
    driver.quit();
  }


  @Test(priority = 1, groups = { "positiveTests" })
  public void PositiveLoginTest() {

    System.out.println("Starting Login Test!");

    String url = "https://the-internet.herokuapp.com/login";

    driver.get(url);

    WebElement username = driver.findElement(By.id("username"));
    username.sendKeys("tomsmith");

    WebElement password = driver.findElement(By.name("password"));
    password.sendKeys("SuperSecretPassword!");

    WebElement loginButton = driver.findElement(By.tagName("button"));
    WebDriverWait wait = new WebDriverWait(driver, 10);
    wait.until(ExpectedConditions.elementToBeClickable(loginButton));
    loginButton.click();

    String expectedUrl = "https://the-internet.herokuapp.com/secure";
    String actualUrl = driver.getCurrentUrl();

    Assert.assertEquals(actualUrl, expectedUrl, "Actual page URL is not the same as expected.");


    // logout button is visible
    WebElement logOutButton = driver.findElement(By.xpath("//a[@class='button secondary radius']"));
    Assert.assertTrue(logOutButton.isDisplayed(), "Logout button is not visible");

    // succesful login message
    // WebElement successMessage = driver.findElement(By.cssSelector("#flash"));
    WebElement successMessage = driver.findElement(By.xpath("//div[@id='flash']"));
    String expectedMessage = "You logged into a secure area";
    String actualMessage = successMessage.getText();
    // Assert.assertEquals(actualMessage, expectedMessage, "Actual message is not the same as expected");
    Assert.assertTrue(actualMessage.contains(expectedMessage), "Actual message does not contain expected.\n Actual Message: " + actualMessage + "ExpectedMessage: " + expectedMessage);
  }

  @Parameters({ "username", "password", "expectedMessage" })
  @Test(groups = { "negativeTests" })
  public void negativeLoginTests(String username, String password, String expectedMessage) {

    System.out.println("Starting Incorrect Username Test!");

    String url = "https://the-internet.herokuapp.com/login";

    driver.get(url);

    WebElement usernameElement = driver.findElement(By.id("username"));
    usernameElement.sendKeys(username);

    WebElement passwordElement = driver.findElement(By.name("password"));
    passwordElement.sendKeys(password);

    WebElement loginButtonElement = driver.findElement(By.tagName("button"));
    loginButtonElement.click();

    WebElement errorMessage = driver.findElement(By.xpath("//div[@id='flash']"));
    String actualMessage = errorMessage.getText();
    Assert.assertTrue(actualMessage.contains(expectedMessage), "Actual message does not contain expected.\n Actual Message: " + actualMessage + "ExpectedMessage: " + expectedMessage);

  }

  private void sleep(long duration) {
    try {
      Thread.sleep(duration);
    } catch (Exception e) {
      // handle exception
    }
  }
}
