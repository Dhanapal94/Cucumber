package Utilities;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.AddnewCustomer;
import pageObjects.AdminPage;
import pageObjects.DashboardPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Base {
	public WebDriver driver;
	public LoginPage login ;
	public AdminPage admin;
	public DashboardPage dashBoard;
	public AddnewCustomer addNewCustomer;
	public SearchCustomerPage searchCustomer;
	public Logger log;
	public static Properties prop;
	public String filePath ="./Configuration\\data.properties";	
	
	public String randomString()
	{
		String randomValue = RandomStringUtils.randomAlphabetic(5);
		return randomValue;
	}
	
	public String getTitle()
	{
		String title = driver.getTitle();
		return title;		
	}
	
	
	

}
