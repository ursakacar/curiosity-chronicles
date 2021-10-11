# Selenium Webdriver with Java for beginners

## Why?

I have taken over development and maintenance of the existing test framework using Selenium Webdriver, Maven & Java and I need a refresher on the topic

https://www.udemy.com/course/selenium-for-beginners/

git project: https://github.com/dimashyshkin/Selenium-WebDriver-with-Java-for-beginners

### Basics

`java -version`
also need JDK
`maven -version`

http://the-internet.herokuapp.com/

copy chrome/gecko/msedge drivers from `lib/bin/local`, and make them executable with `chmod +x chromedriver`

`pom.xml` single configuration file, contains info required to build the project. No need to download .jar files and add them to the project- we just add dependencies to Maven's pom file.

Added plugins `maven-surefire-plugin` (for running tests) and `maven-compiler-plugin` and dependency `testng` (for the latter, `<scope>test</scope>` was removed as it can be limiting)

Create .java class in test/java folder

### Commands

`mvn clean test` // runs the tests
`mvn -Dtest=PositiveTests clean test` // only run one test class

@Test lets maven know to run it, comment it out to not run it


### Locators

#### xpath

`//tag[@attribute='value]`

*tag* = button, input, *attribute* = class, name, id

### Misc

Ranorex selocity extension for locators

Some examples for checking locators in Chrome devtools:

`$x("/html//input[@id='password']")`

`$x("//div[@id='flash']")`

## TestNG

https://testng.org/doc/documentation-main.html#annotations

Tests are run in alphabetical order

`@Test(priority = 1)` will be executed first, as priority is assigned

`@Test(priority = 1, enabled = false)` to disable a test, it won't be run

Test group for determining group of tests (smoke tests, regression tests, etc.)
`@Test(groups = { "negativeTests", "smokeTests" })`, don't forget to also update testNG .xml files!

### Creating a test suite

https://testng.org/doc/documentation-main.html#testng-xml

Copy first example and save as AllTests.xml under `/src/test/TestSuites`

In `pom.xml` uncomment the conf
iguration under `maven-surefire-plugin` (and rename `testng.xml`), so Maven knows that conf to use.

### Parameters from TestSuite

https://testng.org/doc/documentation-main.html#parameters-testng-xml

`@Before` and `@After` annotations - init driver should be done before all tests, closing drive after all tests

Add alwaysRun parameter`@BeforeMethod(alwaysRun = true)` so that those methods are always run.

## Waits

* implicit (by default it's 0), it's set one time, one value for all tests
* explicit (Thread.sleep is worst case), can be added in diff places
* never mix explicit and implicit waits!

Check `LoginTestsCombined.java` for waits example.