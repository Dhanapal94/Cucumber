package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchCustomerPage {

	public WebDriver driver;
	public String emailSearch;
	public boolean searchFlag=false;
	

	public SearchCustomerPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="SearchEmail")
	WebElement searchEmail;

	@FindBy(id="search-customers")
	WebElement search;
	
	By tableResults = By.xpath("//table[@id='customers-grid']/tbody/tr/td[2]");
	
	public void getEmail(String email)
	{
		emailSearch = email;		
	}
	
	public void setEmail()
	{
		searchEmail.clear();
		searchEmail.sendKeys(emailSearch);	
	}
	
	public void searchClick()
	{
		search.click();
		
	}
	
	public boolean tableSearchResults()
	{
		List<WebElement> results = driver.findElements(tableResults);
		
		for(int i =0;i<results.size();i++)
		{
			String actualResult = results.get(i).getText();
			if(actualResult.equals(emailSearch))
			{
				searchFlag=true;
				break;
			}
		}
		return searchFlag;
		
	}

}
