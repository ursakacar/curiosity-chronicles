package com.herokuapp.theinternet;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeleteWorkflows {

  /*
  * A very silly and a bit unnecessary and mostly overengineered way of deleting old github workflows. Just ignore it.
  */

  @Test
  public void loginTest() {

    System.out.println("Starting Deleting Workflows Automation.");

    // create driver
    System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
    WebDriver driver = new ChromeDriver();

    // open test page
    // String url = "https://github.com/betafish-inc/E2E_QA_automation/actions/workflows/main.yml?query=is%3Afailure";
    // String url = "https://github.com/betafish-inc/E2E_QA_automation/actions/workflows/main.yml?query=is%3Acancelled";
    String url = "https://github.com/betafish-inc/E2E_QA_automation/actions/workflows/main.yml?page=2&query=is%3Asuccess";

    driver.manage().window().maximize();
    driver.get(url);

    // enter username
    WebElement username = driver.findElement(By.id("login_field"));
    username.sendKeys("name");

    // enter password
    WebElement password = driver.findElement(By.id("password"));
    password.sendKeys("pass");

    // click login button
    WebElement loginButton = driver.findElement(By.cssSelector("input[name='commit']"));
    loginButton.click();

    sleep(15000);

    for (int i = 0; i < 20; i++) {
      System.out.println("LOOP: " + i);

      WebElement hamburgerButton = driver.findElement(By.cssSelector(":nth-of-type(1) > .col-12.d-table .btn-link.timeline-comment-action > svg[role='img']"));
      hamburgerButton.click();

      sleep(1000);

      WebElement deleteWorkflow = driver.findElement(By.cssSelector("div#partial-actions-workflow-runs > div:nth-of-type(1) .text-right > .d-inline-block.details-reset.position-relative > .anim-scale-in.color-text-primary.dropdown-menu.dropdown-menu-sw  .details-reset > summary[role='button']"));
      deleteWorkflow.click();

      sleep(2500);

      WebElement deleteConfirmation = driver.findElement(By.cssSelector(".btn-danger.btn"));
      deleteConfirmation.click();
  }
    // close browser
    // driver.quit();
  }

  private void sleep(long duration) {
    try {
      Thread.sleep(duration);
    } catch (Exception e) {
      // handle exception
    }
  }
}
