$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16582768600,
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
  "duration": 738788200,
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
  "duration": 15480879000,
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
  "duration": 1138995600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 23407277600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 50197300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_menu()"
});
formatter.result({
  "duration": 233551400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_the_list()"
});
formatter.result({
  "duration": 3815477500,
  "status": "passed"
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
  "duration": 2926776800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.customers_info_page_for_adding_new_customer_should_display()"
});
formatter.result({
  "duration": 190281000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_fills_the_new_customer_details()"
});
formatter.result({
  "duration": 5924532000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "duration": 2716086200,
  "status": "passed"
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
  "duration": 72820700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 3463596400,
  "status": "passed"
});
formatter.after({
  "duration": 2049353700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u002710.21.226.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:58721}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 76a6e47632bae16204256a25a9da2220\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:633)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:462)\r\n\tat stepDefinitions.Steps.tearDown(Steps.java:380)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 11332818100,
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
  "duration": 45398800,
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
  "duration": 11986380400,
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
  "duration": 602743000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 15728660100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 13965300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_menu()"
});
formatter.result({
  "duration": 142282500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_in_the_list()"
});
formatter.result({
  "duration": 3370600900,
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
  "duration": 734745300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Search_Button()"
});
formatter.result({
  "duration": 158729200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.respective_searched_Email_customer_should_present_in_a_search_table()"
});
formatter.result({
  "duration": 228638800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 3615128800,
  "status": "passed"
});
formatter.after({
  "duration": 2013086800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u002710.21.226.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:58761}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0d32ca921ca1fd4fbd81349fa84b4f09\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:633)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:462)\r\n\tat stepDefinitions.Steps.tearDown(Steps.java:380)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.uri("Login-Admin.feature");
formatter.feature({
  "line": 1,
  "name": "Admin Login",
  "description": "",
  "id": "admin-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11486601600,
  "status": "passed"
});
formatter.before({
  "duration": 95200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Admin login with valid credentials",
  "description": "",
  "id": "admin-login;admin-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to nocommerce  admin website \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User provides admin credentails to login",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 9
    },
    {
      "cells": [
        "admin@your.com",
        "admin"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on admin Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should view admin Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User checks the mail \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "first name of the user is \"Dhanapal Karthik\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launches__browser()"
});
formatter.result({
  "duration": 37258200,
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
  "duration": 15841126300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_provides_admin_credentails_to_login(DataTable)"
});
formatter.result({
  "duration": 858674700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 19021891700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 20137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    }
  ],
  "location": "Steps.user_checks_the_mail(String)"
});
formatter.result({
  "duration": 182700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhanapal Karthik",
      "offset": 27
    }
  ],
  "location": "Steps.first_name_of_the_user_is(String)"
});
formatter.result({
  "duration": 156900,
  "status": "passed"
});
formatter.after({
  "duration": 72400,
  "status": "passed"
});
formatter.after({
  "duration": 2392068600,
  "status": "passed"
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
  "duration": 13548665200,
  "status": "passed"
});
formatter.before({
  "duration": 41900,
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
  "duration": 34664600,
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
  "duration": 16491903400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_Login_button_in_top_of_the_page()"
});
formatter.result({
  "duration": 2782754700,
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
    },
    {
      "line": 8,
      "name": "@first"
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
  "duration": 659672000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_LOG_IN_button()"
});
formatter.result({
  "duration": 1386415100,
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
  "duration": 950573500,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_should_contains(Steps.java:130)\r\n\tat ✽.Then Page should contains \"Log out\"(Login-Nocommerce.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 79200,
  "status": "passed"
});
formatter.after({
  "duration": 2007044100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u002710.21.226.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:58830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b31ad85b039530f077a9219dd824c5f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:633)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:462)\r\n\tat stepDefinitions.Steps.tearDown(Steps.java:380)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login with valid credentials datadriven",
  "description": "",
  "id": "login-feature;login-with-valid-credentials-datadriven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicked on LOG IN button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Page should contains \"Log out\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-feature;login-with-valid-credentials-datadriven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 21,
      "id": "login-feature;login-with-valid-credentials-datadriven;;1"
    },
    {
      "cells": [
        "dd@gmail.com",
        "Dhana-07"
      ],
      "line": 22,
      "id": "login-feature;login-with-valid-credentials-datadriven;;2"
    },
    {
      "cells": [
        "dhanapalinfocse@gmail.com",
        "Dhana-01"
      ],
      "line": 23,
      "id": "login-feature;login-with-valid-credentials-datadriven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11619447300,
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
  "duration": 53818800,
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
  "duration": 15506683100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_Login_button_in_top_of_the_page()"
});
formatter.result({
  "duration": 6721945500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with valid credentials datadriven",
  "description": "",
  "id": "login-feature;login-with-valid-credentials-datadriven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Enters Email as \"dd@gmail.com\" and Password as \"Dhana-07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicked on LOG IN button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
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
  "duration": 1092882100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_LOG_IN_button()"
});
formatter.result({
  "duration": 1558103500,
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
  "duration": 2379592900,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_should_contains(Steps.java:130)\r\n\tat ✽.Then Page should contains \"Log out\"(Login-Nocommerce.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2019896600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u002710.21.226.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:58860}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 25620494ee75ec0a68d4b4a3b80b40e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:633)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:462)\r\n\tat stepDefinitions.Steps.tearDown(Steps.java:380)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 16094686000,
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
  "duration": 67267200,
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
  "duration": 16499927100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_Login_button_in_top_of_the_page()"
});
formatter.result({
  "duration": 3188699800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with valid credentials datadriven",
  "description": "",
  "id": "login-feature;login-with-valid-credentials-datadriven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Enters Email as \"dhanapalinfocse@gmail.com\" and Password as \"Dhana-01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicked on LOG IN button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Page should contains \"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dhanapalinfocse@gmail.com",
      "offset": 22
    },
    {
      "val": "Dhana-01",
      "offset": 66
    }
  ],
  "location": "Steps.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1441061700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_LOG_IN_button()"
});
formatter.result({
  "duration": 2151185700,
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
  "duration": 1096118900,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_should_contains(Steps.java:130)\r\n\tat ✽.Then Page should contains \"Log out\"(Login-Nocommerce.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2007100200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LHTU05CG4472DYW\u0027, ip: \u002710.21.226.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\da4\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:58955}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4c28ac10477dfc5decb366a541aefc86\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:633)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:462)\r\n\tat stepDefinitions.Steps.tearDown(Steps.java:380)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.uri("Shipments.feature");
formatter.feature({
  "line": 1,
  "name": "Shipments",
  "description": "",
  "id": "shipments",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13636320400,
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
formatter.match({
  "location": "Steps.user_launches__browser()"
});
formatter.result({
  "duration": 56006700,
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
  "duration": 15554925200,
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
  "duration": 702557300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_admin_Login_Button()"
});
formatter.result({
  "duration": 18391053500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_admin_Dashboard_page()"
});
formatter.result({
  "duration": 20832400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Shipment Edit",
  "description": "",
  "id": "shipments;shipment-edit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User clicked on Sales in dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicked on Shipments in sales list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should view Shipments page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicked on View button of the maximum Total weight",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter the tracking Number as \"03041\" in tracking box",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Set Tracking Number",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicked on Shipments in sales list",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_clicked_on_Sales_in_dashboard()"
});
formatter.result({
  "duration": 214932800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_Shipments_in_sales_list()"
});
formatter.result({
  "duration": 4091148100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_view_Shipments_page()"
});
formatter.result({
  "duration": 237343800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_View_button_of_the_maximum_Total_weight()"
});
formatter.result({
  "duration": 3249251600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03041",
      "offset": 35
    }
  ],
  "location": "Steps.user_Enter_the_tracking_Number_as_in_tracking_box(String)"
});
formatter.result({
  "duration": 407945800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_Set_Tracking_Number()"
});
formatter.result({
  "duration": 2989926300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicked_on_Shipments_in_sales_list()"
});
formatter.result({
  "duration": 4554503700,
  "status": "passed"
});
formatter.after({
  "duration": 3167719500,
  "status": "passed"
});
});