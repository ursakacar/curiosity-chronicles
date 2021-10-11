package com.herokuapp.theinternet;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class NegativeTests {

  @Test(groups = { "negativeTests", "smokeTests" })
  public void incorrectUsernameTest() {

    System.out.println("Starting Incorrect Username Test!");

    // System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
    // System.setProperty("webdriver.gecko.driver", "src/main/resources/geckodriver");
    System.setProperty("webdriver.edge.driver", "src/main/resources/edgedriver");
    // WebDriver driver = new ChromeDriver();
    // WebDriver driver = new FirefoxDriver();
    WebDriver driver = new EdgeDriver();

    String url = "https://the-internet.herokuapp.com/login";

    driver.manage().window().maximize();
    driver.get(url);

    WebElement username = driver.findElement(By.id("username"));
    username.sendKeys("wrongusername");

    WebElement password = driver.findElement(By.name("password"));
    password.sendKeys("SuperSecretPassword!");

    WebElement loginButton = driver.findElement(By.tagName("button"));
    loginButton.click();

    WebElement errorMessage = driver.findElement(By.xpath("//div[@id='flash']"));
    String expectedMessage = "Your username is invalid";
    String actualMessage = errorMessage.getText();
    Assert.assertTrue(actualMessage.contains(expectedMessage), "Actual message does not contain expected.\n Actual Message: " + actualMessage + "ExpectedMessage: " + expectedMessage);

    driver.quit();
  }

  @Test(groups = { "negativeTests" })
  public void incorrectPasswordTest() {

    System.out.println("Starting Incorrect Password Test!");

    System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
    WebDriver driver = new ChromeDriver();

    String url = "https://the-internet.herokuapp.com/login";

    driver.manage().window().maximize();
    driver.get(url);

    WebElement username = driver.findElement(By.id("username"));
    username.sendKeys("tomsmith");

    WebElement password = driver.findElement(By.name("password"));
    password.sendKeys("wrongpassword");

    WebElement loginButton = driver.findElement(By.tagName("button"));
    loginButton.click();

    WebElement errorMessage = driver.findElement(By.xpath("//div[@id='flash']"));
    String expectedMessage = "Your password is invalid";
    String actualMessage = errorMessage.getText();
    Assert.assertTrue(actualMessage.contains(expectedMessage), "Actual message does not contain expected.\n Actual Message: " + actualMessage + "ExpectedMessage: " + expectedMessage);

    driver.quit();
  }

}
