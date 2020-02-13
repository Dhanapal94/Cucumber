package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddnewCustomer {

	WebDriver driver;
	public String gendervalue ;
	public String newsLetterValue;

	public AddnewCustomer(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	public void getGender(String val)
	{
		gendervalue = val;
		System.out.println(gendervalue);
	}
	
	public void getNewsLetter(String val)
	{
		newsLetterValue = val;
	}

	@FindBy(id="Email")
	WebElement email;	

	@FindBy(id="Password")
	WebElement password;

	@FindBy(id="FirstName")
	WebElement firstName;

	@FindBy(id="LastName")
	WebElement lastName;

	

	@FindBy(id="DateOfBirth")
	WebElement dob;

	@FindBy(id="Company")
	WebElement company;

	@FindBy(id="IsTaxExempt")
	WebElement isTaxExempt;

	@FindBy(xpath="//div/label[text()='Customer roles']//following::div[3]")
	WebElement customerRoles;

	By customerRolesValue = By.xpath("//ul[@id='SelectedCustomerRoleIds_listbox']/li");

	@FindBy(id="VendorId")
	WebElement vendorID;

	@FindBy(id="Active")
	WebElement active;

	@FindBy(id="AdminComment")
	WebElement adminComments;

	@FindBy(xpath="//button[@name='save']")
	WebElement save;
	
	@FindBy(xpath="//li/span[text()='delete']")
	WebElement deleteOld;


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

	public void setFirstName(String val)
	{
		firstName.clear();
		firstName.sendKeys(val);
	}


	public void setLastName(String val)
	{
		lastName.clear();
		lastName.sendKeys(val);
	}

	public void genderClick()
	{
		By gender = By.xpath("//label/input[@name='Gender' and @value='"+gendervalue+"']");
		driver.findElement(gender).click();
	}

	public void setDOB(String val)
	{
		dob.clear();
		dob.sendKeys(val);
	}
	
	public void setCompany(String val)
	{
		company.clear();
		company.sendKeys(val);
	}
	
	public void isTaxExemptClick()
	{
		isTaxExempt.click();
	}
	
	public void newsLetterClick()
	{
		By newsLetter = By.xpath("//label/input[@name='SelectedNewsletterSubscriptionStoreIds' and @value='"+newsLetterValue+"']");
		driver.findElement(newsLetter).click();
	}
	
	public void setCustomerRoles(String role) throws Exception
	{
		deleteOld.click();
		customerRoles.click();
		Thread.sleep(2000);
		List<WebElement> roles = driver.findElements(customerRolesValue);
		System.out.println("list of roles available : "+roles.size());
		for(int i =0;i<roles.size();i++)
		{
			String listValue =roles.get(i).getText();
			System.out.println(i+" : "+listValue);
			if(listValue.equalsIgnoreCase(role))
			{
				roles.get(i).click();
				break;
			}
		}
			
	}
	
	public void selectVendor(String vendorValue)
	{
		Select sel = new Select(vendorID);
		sel.selectByVisibleText(vendorValue);	
	}
	
	public void setActive()
	{
		active.click();
	}
	
	public void setAdminComment(String comments)
	{
		adminComments.clear();
		adminComments.sendKeys(comments);
	}
	
	public void saveClick()
	{
		save.click();
	}
}
