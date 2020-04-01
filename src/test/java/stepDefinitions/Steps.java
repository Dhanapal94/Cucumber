package stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import Transformation.EmailTranform;
import Transformation.NameTransform;
import Utilities.Base;
import Utilities.ReadConfig;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pageObjects.*;

public class Steps extends Base{
	
	String emailValue = "james_pan@nopCommerce.com";
	ReadConfig conf ;
	
	@Before(order=0)
	public void setUp() throws IOException
	{
		conf =  new ReadConfig();
		System.out.println(conf.browserName());
		System.out.println("Test started -Execution - launching browser");
		if(conf.browserName().equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver",conf.chromePath());
			ChromeOptions options = new ChromeOptions();
			options.setExperimentalOption("useAutomationExtension", false);
			options.setExperimentalOption("excludeSwitches", new String[] { "enable-automation" });
			options.setCapability(CapabilityType.ACCEPT_INSECURE_CERTS, true);
			options.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			driver = new ChromeDriver(options);			
		}
		else if(conf.browserName().equals("internet explorer"))
		{
			System.setProperty("webdriver.ie.driver",conf.iePath());
			DesiredCapabilities caps = new DesiredCapabilities();
			caps.setCapability("ignoreZoomSetting", true);
			caps.setCapability(InternetExplorerDriver.NATIVE_EVENTS, false);
			caps.setCapability("unexpectedAlertBehaviour", "accept");
			caps.setCapability("ignoreProtectedModeSettings", true);
			caps.setCapability("disable-popup-blocking", true);
			caps.setCapability("enablePersistentHover", true);
			caps.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
			//caps.setCapability("requireWindowFocus", true);
			//caps.setAcceptInsecureCerts(true);
			driver = new InternetExplorerDriver(caps);
		}
		driver.manage().window().maximize();	
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	
	@Given("^User launches browser$")
	public void user_launches__browser() throws Throwable {
	   
		login = new LoginPage(driver);
		admin = new AdminPage(driver);
		dashBoard = new DashboardPage(driver);
		addNewCustomer= new AddnewCustomer(driver);
		searchCustomer = new SearchCustomerPage(driver);	
		log = Logger.getLogger("Cucumber");
		shipmentsdash = new ShipmentsDashboardPage(driver);
		shipmentsedit = new ShipmentsEditPage(driver);
		PropertyConfigurator.configure("log4j.properties");
	}

	@Given("^User navigates to nocommerce website \"([^\"]*)\"$")
	public void user_navigates_to_nocommerce_website(String url) throws Throwable {
		driver.get(url);
		log.info("***Nocommerce websited launched successfully***"+url);
	   
	}
	
	@Then("^User clicked Login button in top of the page$")
	public void user_clicked_Login_button_in_top_of_the_page() throws Throwable {
		login.topLoginClick();
		log.info("***Top login is clicked***");
	}

	@Then("^User Enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_Enters_Email_as_and_Password_as(String email, String password) throws Throwable {		
		login.setEmail(email);
		login.setPassword(password);
		log.info("***User Email and password provided successfully***");
	}

	@Then("^User clicked on LOG IN button$")
	public void user_clicked_on_LOG_IN_button() throws Throwable {
		login.loginSubmit();
		log.info("***Login  button is clicked***");
	    
	}

	@Then("^Page should contains \"([^\"]*)\"$")
	public void page_should_contains(String arg1) throws Throwable {
		
		String expected = arg1;
		String actual = driver.getPageSource();
		if(actual.contains(expected))
		{
			Assert.assertTrue(true);
			log.info("***User login is success***");
			driver.close(); 
		}
		else
		{
			log.info("***User login is Failure***");
			driver.close(); 
			Assert.assertTrue(false);
			
		}
		   
	}
	
	//******ADMIN**********//
	
	@Given("^User navigates to nocommerce  admin website \"([^\"]*)\"$")
	public void user_navigates_to_nocommerce_admin_website(String adminURL) throws Throwable {
	    
		driver.get(adminURL);
		log.info("***Nocommerce admin URL launched successfully**");
	}
	
	@Then("^User provides admin Email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_provides_admin_Email_as_and_password_as(String email, String password) throws Throwable {
	   
		admin.setAdminEmail(email);
		admin.setAdminPassword(password);	
		log.info("***Admin Email and password provided successfully***");
	}

	@Then("^User click on admin Login Button$")
	public void user_click_on_admin_Login_Button() throws Throwable {
		admin.adminLoginClick();
		log.info("***Admin login clicked***");
	}
	
	@Then("^User should view admin Dashboard page$")
	public void user_should_view_admin_Dashboard_page() throws Throwable {
	   
		String actualTitle = getTitle();
		String expectedTitle = "Dashboard / nopCommerce administration";
		
		if(expectedTitle.equals(actualTitle))
		{
			Assert.assertTrue(true);
			log.info("***Admin dashboard page is visible -pass***");
		}
		else
		{
			System.out.println("Dashboard page is not visible - Login is failed");
			driver.close();
			log.error("***Admin dashboard page is not visible -Fail***");
			Assert.assertTrue(false);		
		}
		
	}
	
	@Then("^User click on Customers in menu$")
	public void user_click_on_Customers_in_menu() throws Throwable {
	
		dashBoard.customerMenuClick();
		log.info("***Admin customer menu clicked***");
	}
	
	@Then("^User click on Customers in the list$")
	public void user_click_on_Customers_in_the_list() throws Throwable {
	   
		dashBoard.customersListClick();
		log.info("***Admin customer list menu clicked***");

		
	}
	
	@When("^User click on Add New button for adding a new customer$")
	public void user_click_on_Add_New_button_for_adding_a_new_customer() throws Throwable {
	    
		dashBoard.addNewCustomer();
		log.info("***Admin new customer clicked***");

	}
	
	@Then("^Customers info page for adding new customer should display$")
	public void customers_info_page_for_adding_new_customer_should_display() throws Throwable {
	    
		String actualNewCustomerPage = driver.getPageSource();
		String expectedNewCustomerPage = "Customer info";
		
		if(actualNewCustomerPage.contains(expectedNewCustomerPage))
		{
			Assert.assertTrue(true);
			log.info("***New customer info page displayed***");

		}
		else
		{
			System.out.println("New customer page is not displayed- after clicking on customer");
			driver.close();
			log.error("***New customer info page not displayed***-Fail");
			Assert.assertTrue(false);
			
		}
	}

	@Then("^User fills the new customer details$")
	public void user_fills_the_new_customer_details() throws Throwable {
		
		String emailValue = randomString()+"@gmail.com";
		addNewCustomer.setEmail(emailValue);
		addNewCustomer.setPassword("Dhana-07");
		addNewCustomer.setFirstName("DK");
		addNewCustomer.setLastName("JK");
		addNewCustomer.getGender("M");
		addNewCustomer.genderClick();
		addNewCustomer.setDOB("02/11/2020");
		addNewCustomer.setCompany("Dxc technologies");
		addNewCustomer.isTaxExemptClick();
		addNewCustomer.getNewsLetter("2");
		addNewCustomer.newsLetterClick();
		addNewCustomer.setCustomerRoles("Guests");
		addNewCustomer.selectVendor("Vendor 2");
		//addNewCustomer.setActive();
		addNewCustomer.setAdminComment("Test demo check");
		log.info("***New customer details filled successfully***");
	}
	
	@Then("^click on save button$")
	public void click_on_save_button() throws Throwable {
		addNewCustomer.saveClick();
	}
	@Then("^Success \"([^\"]*)\" message should display$")
	public void success_message_should_display(String arg1) throws Throwable {
	    
		if(driver.getPageSource().contains(arg1))
		{
			Assert.assertTrue(true);
			System.out.println("New customer is created successfully");
			log.info("***New customer created successfully***");
		}
		else
		{
			System.out.println("New customer is not created successfully");
			driver.close();
			log.error("***New customer not created***");
			Assert.assertTrue(false);
		}
	}
	@Then("^close the browser$")
	public void close_the_browser() throws Exception {
		Thread.sleep(3000);
	    driver.close();
	    log.info("***Browser closed***");
	}
	
	//***Customer Search***//
	
	@When("^User provides Email id in the Email Box$")
	public void user_provides_Email_id_in_the_Email_Box() throws Throwable {
			
		searchCustomer.getEmail(emailValue);
		searchCustomer.setEmail();
		log.info("**Search Email provided**");
	    
	}
	
	@When("^User click on Search Button$")
	public void user_click_on_Search_Button() throws Throwable {
		
		searchCustomer.searchClick();
		log.info("***Search customer clicked***");
	}
	
	@Then("^Respective searched Email customer should present in a search table$")
	public void respective_searched_Email_customer_should_present_in_a_search_table() throws Throwable {
	    
		boolean flagResult = searchCustomer.tableSearchResults();
		
		if(flagResult)
		{
			Assert.assertTrue(true);
			System.out.println("Searched Email found in Table results");
			log.info("***Search email found in Table***");
		}
		else
		{
			System.out.println("Searched Email not found in Table results");
			log.info("***Search email not found in Table***");
			Assert.assertTrue(false);
		}
	}
	@Then("^User provides admin credentails to login$")
	public void user_provides_admin_credentails_to_login(DataTable credentials) throws Throwable {
	    
		List<Map<String,String>> data = credentials.asMaps(String.class,String.class);
		admin.setAdminEmail(data.get(0).get("Username"));
		admin.setAdminPassword(data.get(0).get("Password"));
	    
	}
	@Then("^User checks the mail \"([^\"]*)\"$")
	public void user_checks_the_mail(@Transform(EmailTranform.class)String email) throws Throwable {
	   
		System.out.println("Transformed Value is : "+email);
		
	}
	@Then("^first name of the user is \"([^\"]*)\"$")
	public void first_name_of_the_user_is(@Transform(NameTransform.class)String name) throws Throwable {
	  
		System.out.println("Transformed first name is : "+name);
	}
	
	@Given("^User clicked on Sales in dashboard$")
	public void user_clicked_on_Sales_in_dashboard() throws Throwable {
		dashBoard.salesClick();
	}

	@Given("^User clicked on Shipments in sales list$")
	public void user_clicked_on_Shipments_in_sales_list() throws Throwable {
		dashBoard.shipmentsClick();
	}

	@Then("^User should view Shipments page$")
	public void user_should_view_Shipments_page() throws Throwable {
		String actual = driver.getPageSource();
		String expected = "Date shipped";
		if(actual.contains(expected))
		{
			Assert.assertTrue(true);
			log.info("Shipments page is found");
		}
		else
		{
			log.error("Shipments page not found");
			Assert.assertTrue(false);
		}
	   
	}

	@Then("^User clicked on View button of the maximum Total weight$")
	public void user_clicked_on_View_button_of_the_maximum_Total_weight() throws Throwable {
		shipmentsdash.viewClick();
	}

	@Then("^User Enter the tracking Number as \"([^\"]*)\" in tracking box$")
	public void user_Enter_the_tracking_Number_as_in_tracking_box(String arg1) throws Throwable {
		shipmentsedit.setTrackingNumber(arg1);
	}

	@Then("^User clicked on Set Tracking Number$")
	public void user_clicked_on_Set_Tracking_Number() throws Throwable {
		shipmentsedit.setTrackingNumberClick();
	    
	}

	@After(order=0)
	public void tearDown() throws InterruptedException
	{
		System.out.println("Test ended - closing browser");
		Thread.sleep(2000);
		driver.close();
	}
	
	@Before("@first")
	public void beforeMethod()
	{
		System.out.println("Alas ! Im before method");
	}
	
	@After("@first")
	public void afterMethod()
	{
		System.out.println("Alas ! Im after method");
	}
	
	@Before("@second")
	public void beforeMethod1()
	{
		System.out.println("search email before");
	}
	
	@After("@second")
	public void afterMethod1()
	{
		System.out.println("search email after");
	}
	
	

}
