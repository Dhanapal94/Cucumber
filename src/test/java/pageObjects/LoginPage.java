package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[text()='Log in']")
	private WebElement loginMain;
	
	@FindBy(id="Email")
	private WebElement email;
	
	@FindBy(id="Password")
	private WebElement password;
	
	@FindBy(xpath="//input[@value='Log in']")
	private WebElement loginButton;
	
	public void topLoginClick()
	{
		loginMain.click();
	}
	
	
	public void setEmail(String val)
	{
		email.clear();
		email.sendKeys(val);
	}
	
	public void setPassword(String val)
	{
		password.clear();
		password.sendKeys(val);
	}
	
	public void loginSubmit()
	{
		loginButton.click();
	}
	
	

}
