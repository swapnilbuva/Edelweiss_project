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
    And enters receiver address <receiver>
    And subject <user> <receiver>
    And body
    And add attachment <user> <receiver>
    And click on send
    And close window

    Examples:
      | user | receiver|
      |1     |    1    |
      |2     |    1    |
      |3     |    1    |
      |4     |    1    |
      |5     |    1    |

  Scenario Outline: login2
    When enters correct username <user>
    And enters correct password <user>
    And clicks on login button
    Then user is navigated to Inbox
    When user clicks on compose button
    And enters receiver address <receiver>
    And subject <user> <receiver>
    And body
    And add attachment <user> <receiver>
    And click on send
    And close window

    Examples:
      | user | receiver|
      |1     |    2    |
      |2     |    2    |
      |3     |    2    |
      |4     |    2    |
      |5     |    2    |


  Scenario Outline: login3
    When enters correct username <user>
    And enters correct password <user>
    And clicks on login button
    Then user is navigated to Inbox
    When user clicks on compose button
    And enters receiver address <receiver>
    And subject <user> <receiver>
    And body
    And add attachment <user> <receiver>
    And click on send
    And close window
    Examples:
      | user | receiver|
      |1     |    3    |
      |2     |    3    |
      |3     |    3    |
      |4     |    3    |
      |5     |    3    |


  Scenario Outline: login4
    When enters correct username <user>
    And enters correct password <user>
    And clicks on login button
    Then user is navigated to Inbox
    When user clicks on compose button
    And enters receiver address <receiver>
    And subject <user> <receiver>
    And body
    And add attachment <user> <receiver>
    And click on send
    And close window
    Examples:
      | user | receiver|
      |1     |    4    |
      |2     |    4    |
      |3     |    4    |
      |4     |    4    |
      |5     |    4    |



  Scenario Outline: login5
    When enters correct username <user>
    And enters correct password <user>
    And clicks on login button
    Then user is navigated to Inbox
    When user clicks on compose button
    And enters receiver address <receiver>
    And subject <user> <receiver>
    And body
    And add attachment <user> <receiver>
    And click on send
    And close window
    Examples:
      | user | receiver|
      |1     |    5    |
      |2     |    5    |
      |3     |    5    |
      |4     |    5    |
      |5     |    5    |
