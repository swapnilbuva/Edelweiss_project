$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/cucumberframework/feature/ymail.feature");
formatter.feature({
  "line": 1,
  "name": "ymail login",
  "description": "This feature steps will be used to login to ymail website",
  "id": "ymail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "login",
  "description": "",
  "id": "ymail-login;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username \u003cuser\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject \u003cuser\u003e 1",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment \u003cuser\u003e 1",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject \u003cuser\u003e 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment \u003cuser\u003e 2",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject \u003cuser\u003e 3",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment \u003cuser\u003e 3",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject \u003cuser\u003e 4",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment \u003cuser\u003e 4",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject \u003cuser\u003e 5",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment \u003cuser\u003e 5",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "ymail-login;login;",
  "rows": [
    {
      "cells": [
        "user"
      ],
      "line": 45,
      "id": "ymail-login;login;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 46,
      "id": "ymail-login;login;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 47,
      "id": "ymail-login;login;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 48,
      "id": "ymail-login;login;;4"
    },
    {
      "cells": [
        "4"
      ],
      "line": 49,
      "id": "ymail-login;login;;5"
    },
    {
      "cells": [
        "5"
      ],
      "line": 50,
      "id": "ymail-login;login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1787423900,
  "status": "passed"
});
formatter.before({
  "duration": 2745000,
  "status": "passed"
});
formatter.before({
  "duration": 1318700,
  "status": "passed"
});
formatter.before({
  "duration": 2485800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to www.ymail.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigates_to_www_ymail_com()"
});
formatter.result({
  "duration": 1169544400,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "login",
  "description": "",
  "id": "ymail-login;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject 1 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment 1 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject 1 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment 1 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject 1 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment 1 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject 1 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment 1 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject 1 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment 1 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_username(int)"
});
formatter.result({
  "duration": 84269800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-1OKBPKAF\u0027, ip: \u0027192.168.217.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swapn\\AppData\\Local\\Temp\\scoped_dir30020_682270379}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57500}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.93, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c6c61cc358a0c9adfb5d464e6b5223a2\n*** Element info: {Using\u003did, value\u003dlogin-username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat cucumberframework.steps.Steps.enters_correct_username(Steps.java:114)\r\n\tat ✽.When enters correct username 1(src/test/java/cucumberframework/feature/ymail.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_password(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_is_navigated_to_Inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1159697700,
  "status": "passed"
});
formatter.before({
  "duration": 817600,
  "status": "passed"
});
formatter.before({
  "duration": 1054500,
  "status": "passed"
});
formatter.before({
  "duration": 972300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to www.ymail.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigates_to_www_ymail_com()"
});
formatter.result({
  "duration": 124470600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-1OKBPKAF\u0027, ip: \u0027192.168.217.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swapn\\AppData\\Local\\Temp\\scoped_dir18848_1754689722}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57518}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.93, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f655c3dcd40f43351f384febfd269ea4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat cucumberframework.steps.Steps.user_navigates_to_www_ymail_com(Steps.java:108)\r\n\tat ✽.Given User navigates to www.ymail.com(src/test/java/cucumberframework/feature/ymail.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 47,
  "name": "login",
  "description": "",
  "id": "ymail-login;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject 2 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment 2 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject 2 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment 2 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject 2 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment 2 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject 2 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment 2 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject 2 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment 2 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_username(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_password(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_is_navigated_to_Inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1201894100,
  "status": "passed"
});
formatter.before({
  "duration": 1049600,
  "status": "passed"
});
formatter.before({
  "duration": 1020900,
  "status": "passed"
});
formatter.before({
  "duration": 1087200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to www.ymail.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigates_to_www_ymail_com()"
});
formatter.result({
  "duration": 219990900,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-1OKBPKAF\u0027, ip: \u0027192.168.217.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swapn\\AppData\\Local\\Temp\\scoped_dir31328_1251060729}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57531}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.93, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 893cef28e6a671b01913b857c3cdd903\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat cucumberframework.steps.Steps.user_navigates_to_www_ymail_com(Steps.java:108)\r\n\tat ✽.Given User navigates to www.ymail.com(src/test/java/cucumberframework/feature/ymail.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 48,
  "name": "login",
  "description": "",
  "id": "ymail-login;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject 3 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment 3 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject 3 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment 3 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject 3 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment 3 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject 3 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment 3 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject 3 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment 3 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_username(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_password(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_is_navigated_to_Inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1156044200,
  "status": "passed"
});
formatter.before({
  "duration": 1009400,
  "status": "passed"
});
formatter.before({
  "duration": 1043500,
  "status": "passed"
});
formatter.before({
  "duration": 867600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to www.ymail.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigates_to_www_ymail_com()"
});
formatter.result({
  "duration": 574918300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "login",
  "description": "",
  "id": "ymail-login;login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username 4",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject 4 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment 4 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject 4 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment 4 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject 4 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment 4 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject 4 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment 4 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject 4 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment 4 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_username(int)"
});
formatter.result({
  "duration": 4089140400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-1OKBPKAF\u0027, ip: \u0027192.168.217.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swapn\\AppData\\Local\\Temp\\scoped_dir28532_1647011127}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57544}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.93, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: eaeac1f5f53ea56394a09e74d2028ddb\n*** Element info: {Using\u003did, value\u003dlogin-username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat cucumberframework.steps.Steps.enters_correct_username(Steps.java:114)\r\n\tat ✽.When enters correct username 4(src/test/java/cucumberframework/feature/ymail.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_password(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_is_navigated_to_Inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1148619200,
  "status": "passed"
});
formatter.before({
  "duration": 858200,
  "status": "passed"
});
formatter.before({
  "duration": 2923600,
  "status": "passed"
});
formatter.before({
  "duration": 782400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to www.ymail.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigates_to_www_ymail_com()"
});
formatter.result({
  "duration": 285999400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-1OKBPKAF\u0027, ip: \u0027192.168.217.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swapn\\AppData\\Local\\Temp\\scoped_dir9176_1030756196}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57568}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.93, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: d6bac5b12d682a7d8b6a1512544fa7b5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat cucumberframework.steps.Steps.user_navigates_to_www_ymail_com(Steps.java:108)\r\n\tat ✽.Given User navigates to www.ymail.com(src/test/java/cucumberframework/feature/ymail.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 50,
  "name": "login",
  "description": "",
  "id": "ymail-login;login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enters correct username 5",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters correct password 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters receiver address 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subject 5 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add attachment 5 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enters receiver address 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "subject 5 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add attachment 5 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enters receiver address 3",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "subject 5 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "add attachment 5 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "enters receiver address 4",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "subject 5 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "add attachment 5 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enters receiver address 5",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "subject 5 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "body",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "add attachment 5 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on send",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "close window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_username(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_correct_password(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_is_navigated_to_Inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.enters_receiver_address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "Steps.subject(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "Steps.add_attachment(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_window()"
});
formatter.result({
  "status": "skipped"
});
});