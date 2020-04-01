package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage {
	
	WebDriver driver;
	
	public DashboardPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@href='#']/span[text()='Customers']")
	WebElement customersMenu;
	
	@FindBy(xpath="//span[@class='menu-item-title' and text()='Customers']")
	WebElement customersList;
	
	@FindBy(xpath="//a[@class='btn bg-blue' and @href='/Admin/Customer/Create']")
	WebElement addNew;
	
	@FindBy(xpath="//span[text()='Sales']")
	WebElement sales;
	
	@FindBy(xpath="//span[text()='Shipments']")
	WebElement shipments;
	
	public void customerMenuClick()
	{
		customersMenu.click();
	}
	
	public void customersListClick()
	{
		customersList.click();
	}
	
	public void addNewCustomer()
	{
		addNew.click();
	}
	
	public void salesClick()
	{
		sales.click();
	}
	
	public void shipmentsClick()
	{
		shipments.click();
	}
	

}
