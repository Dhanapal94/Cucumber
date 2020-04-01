package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShipmentsEditPage {

WebDriver driver;
	

	public ShipmentsEditPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="TrackingNumber")
	WebElement trackingNumber;
	
	@FindBy(name="settrackingnumber")
	WebElement setTrackingNumber;
	
	public void setTrackingNumber(String val)
	{
		trackingNumber.clear();
		trackingNumber.sendKeys(val);
	}
	
	public void setTrackingNumberClick()
	{
		setTrackingNumber.click();
	}
}

