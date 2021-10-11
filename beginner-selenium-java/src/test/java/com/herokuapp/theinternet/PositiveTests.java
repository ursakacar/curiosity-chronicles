package com.herokuapp.theinternet;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class PositiveTests {

  @Test
  public void loginTest() {

    System.out.println("Starting Login Test!");

    // create driver
    System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
    WebDriver driver = new ChromeDriver();

    // open test page
    String url = "https://the-internet.herokuapp.com/login";

    driver.manage().window().maximize();
    driver.get(url);
    System.out.println("Page is opened!");
    sleep(20);

    // enter username
    WebElement username = driver.findElement(By.id("username"));
    username.sendKeys("tomsmith");

    // enter password
    WebElement password = driver.findElement(By.name("password"));
    password.sendKeys("SuperSecretPassword!");

    // click login button
    WebElement loginButton = driver.findElement(By.tagName("button"));
    loginButton.click();

    // verifications:
    // new url
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

    // close browser
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
