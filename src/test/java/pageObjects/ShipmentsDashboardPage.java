package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.PageFactory;

public class ShipmentsDashboardPage {
	
	WebDriver driver;
	

	public ShipmentsDashboardPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}


	@FindBy(xpath="//table[@id='shipments-grid']/tbody/tr/td[text()='4.00 [lb(s)]']//following-sibling::td/a[1]")
	WebElement view;
	
	public void viewClick()
	{
		view.click();
	}
}
