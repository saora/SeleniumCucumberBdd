$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/login");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid credential",
  "description": "",
  "id": "login-action;successful-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser has the login url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on landing page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 10314621523,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.browser_has_the_login_url()"
});
formatter.result({
  "duration": 15279847,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 801846719,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_landing_page()"
});
formatter.result({
  "duration": 8072398,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Verify Your Identity] | Salesforce\u003e but was:\u003c[Iniciar sesión] | Salesforce\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.LoginSteps.user_is_on_landing_page(LoginSteps.java:47)\r\n\tat ✽.And User is on landing page(src/main/java/Feature/login:7)\r\n",
  "status": "failed"
});
});