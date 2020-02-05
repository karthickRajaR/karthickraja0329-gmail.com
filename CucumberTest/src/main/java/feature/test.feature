#Feature: Title of your feature
#
#@tag1
#Scenario: Title of your scenario
#Given I want to write a step with precondition
#And some other precondition
#When I complete action
#And some other action
#And yet another action
#Then I validate the outcomes
#And check more outcomes
Feature: Login Page

  Scenario: Login to the Application
    Given Open the browser
    And Enter the URL
    When Enter the UserName
    And Enter the Password
    And Click on Login Button
    Then Click on Quotes module
    And Click on search button
