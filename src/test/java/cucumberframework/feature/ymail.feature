Feature: ymail login
  This feature steps will be used to login to ymail website
  Background:
    Given User navigates to www.ymail.com

  Scenario Outline: login

    When enters correct username <user>
    And enters correct password <user>
    And clicks on login button
    Then user is navigated to Inbox

    When user clicks on compose button
    And enters receiver address 1
    And subject <user> 1
    And body
    And add attachment <user> 1
    And click on send

    When user clicks on compose button
    And enters receiver address 2
    And subject <user> 2
    And body
    And add attachment <user> 2
    And click on send

    When user clicks on compose button
    And enters receiver address 3
    And subject <user> 3
    And body
    And add attachment <user> 3
    And click on send

    When user clicks on compose button
    And enters receiver address 4
    And subject <user> 4
    And body
    And add attachment <user> 4
    And click on send

    When user clicks on compose button
    And enters receiver address 5
    And subject <user> 5
    And body
    And add attachment <user> 5
    And click on send

    And close window

    Examples:
      | user |
      |1     |
      |2     |
      |3     |
      |4     |
      |5     |
