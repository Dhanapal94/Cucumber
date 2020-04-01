package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage {
	
WebDriver driver;
	
	public AdminPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="Email")
	WebElement adminEmail;
	
	@FindBy(id="Password")
	WebElement adminPassword;
	
	@FindBy(xpath="//input[@type='submit']")
	WebElement adminLogin;
	
	public void setAdminEmail(String val)
	{
		adminEmail.clear();
		adminEmail.sendKeys(val);
	}
	
	public void setAdminPassword(String val)
	{
		adminPassword.clear();
		adminPassword.sendKeys(val);
	}
	
	public void adminLoginClick()
	{
		adminLogin.click();
	}

}
