package com.herokuapp.theinternet;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.Assert;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class NegativeTestsParams {

  @Parameters({ "username", "password", "expectedMessage" })
  @Test(groups = { "negativeTests" })
  public void negativeLoginTests(String username, String password, String expectedMessage) {

    System.out.println("Starting Incorrect Username Test!");

    System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
    // System.setProperty("webdriver.gecko.driver", "src/main/resources/geckodriver");
    // System.setProperty("webdriver.edge.driver", "src/main/resources/edgedriver");
    WebDriver driver = new ChromeDriver();
    // WebDriver driver = new FirefoxDriver();
    // WebDriver driver = new EdgeDriver();

    String url = "https://the-internet.herokuapp.com/login";

    driver.manage().window().maximize();
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

    driver.quit();
  }

}
