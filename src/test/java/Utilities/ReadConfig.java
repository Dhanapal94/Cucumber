package Utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ReadConfig {
	
	public static Properties prop;
	public String filePath ="./Configuration\\data.properties";
	
	public  ReadConfig() throws IOException
	{
		prop = new Properties();	
		FileInputStream fin = new FileInputStream(filePath);
		prop.load(fin);
	}
	public String browserName()
	{
		String browser = prop.getProperty("browser");
		return browser;
	}
	public String applicationURL()
	{
		String url = prop.getProperty("url");
		return url;
	}
	public String chromePath()
	{
		String chromePath = prop.getProperty("chromePath");
		return chromePath;
	}
	public String iePath()
	{
		String iePath = prop.getProperty("iePath");
		return iePath;
	}
	public String extentConfigPath()
	{
		String extentPath = prop.getProperty("reportConfigPath");
		return extentPath;
	}


}
