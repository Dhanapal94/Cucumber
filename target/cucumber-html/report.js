$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13687817100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for all the scenarios",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to nocommerce  admin website \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User provides admin Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on admin Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should view admin Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Customers in menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Customers in the list",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launches__browser()"
});
formatter.result({
  "duration": 1300225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 45
    }
  ],
  "location": "Steps.user_navigates_to_nocommerce_admin_website(String)"
});
formatter.result({
  "duration": 5534985100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 30
    },
    {
      "val": "admin",
      "offset": 68
    }
  ],
  "location": "Steps.user_provides_admin_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 849982600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 17873541500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 56378600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_menu()"
});
formatter.result({
  "duration": 5221512900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_the_list()"
});
formatter.result({
  "duration": 10163613400,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u0027192.168.43.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52214}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0d925abb19361a328d082432eb1811a9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:308)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageObjects.DashboardPage.customersListClick(DashboardPage.java:34)\r\n\tat stepDefinitions.Steps.user_click_on_Customers_in_the_list(Steps.java:182)\r\n\tat ✽.And User click on Customers in the list(Customers.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Add a new Customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User click on Add New button for adding a new customer",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Customers info page for adding new customer should display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User fills the new customer details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Success \"The new customer has been added successfully\" message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Add_New_button_for_adding_a_new_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.customers_info_page_for_adding_new_customer_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_fills_the_new_customer_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully",
      "offset": 9
    }
  ],
  "location": "Steps.success_message_should_display(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 11086340200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for all the scenarios",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to nocommerce  admin website \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User provides admin Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on admin Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should view admin Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Customers in menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Customers in the list",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launches__browser()"
});
formatter.result({
  "duration": 102609500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 45
    }
  ],
  "location": "Steps.user_navigates_to_nocommerce_admin_website(String)"
});
formatter.result({
  "duration": 4909273100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 30
    },
    {
      "val": "admin",
      "offset": 68
    }
  ],
  "location": "Steps.user_provides_admin_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 769031600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 7624835600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 252499600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_menu()"
});
formatter.result({
  "duration": 246139600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_the_list()"
});
formatter.result({
  "duration": 5128719500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search a customer via Email",
  "description": "",
  "id": "customers;search-a-customer-via-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User provides Email id in the Email Box",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Respective searched Email customer should present in a search table",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_Email_id_in_the_Email_Box()"
});
formatter.result({
  "duration": 1093960200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Search_Button()"
});
formatter.result({
  "duration": 222577500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.respective_searched_Email_customer_should_present_in_a_search_table()"
});
formatter.result({
  "duration": 726447400,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u0027192.168.43.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52239}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1676c37c122903aee7b8f994ea321901\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:308)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:173)\r\n\tat pageObjects.SearchCustomerPage.tableSearchResults(SearchCustomerPage.java:55)\r\n\tat stepDefinitions.Steps.respective_searched_Email_customer_should_present_in_a_search_table(Steps.java:289)\r\n\tat ✽.Then Respective searched Email customer should present in a search table(Customers.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login-Nocommerce.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12015637400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the steps common for all the scenarios",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to nocommerce website \"https://demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicked Login button in top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launches__browser()"
});
formatter.result({
  "duration": 53386200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/",
      "offset": 38
    }
  ],
  "location": "Steps.user_navigates_to_nocommerce_website(String)"
});
formatter.result({
  "duration": 4392241000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_Login_button_in_top_of_the_page()"
});
formatter.result({
  "duration": 2381619800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-feature;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User Enters Email as \"dd@gmail.com\" and Password as \"Dhana-07\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicked on LOG IN button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Page should contains \"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dd@gmail.com",
      "offset": 22
    },
    {
      "val": "Dhana-07",
      "offset": 53
    }
  ],
  "location": "Steps.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1060093800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_LOG_IN_button()"
});
formatter.result({
  "duration": 3455754600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 22
    }
  ],
  "location": "Steps.page_should_contains(String)"
});
formatter.result({
  "duration": 2546696600,
  "status": "passed"
});
});