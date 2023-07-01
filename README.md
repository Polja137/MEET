#MEET App
The objective is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. 
The application uses the Google Calendar API to fetch upcoming events.

##Key Features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city

---

Created with CRA
Deployed with GitHupPages
AWS

---

##Stories and scenarioes

###4.1 Test-Driven Development
####Feature 1: Filter Events by City
User story: As a user, I should be able to filter events by city So that I can see the list of events that take place in that city.
Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities.
● Given user hasn’t searched for any city
● When the user opens the app
● Then the user should see a list of all upcoming events
Scenario 2: The User should see a list of suggestions when they search for a city.
● Given the main page is open
● When user starts typing in the city textbox
● Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 3: User can select a city from the suggested list.
● Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing
● When the user selects a city (e.g., “Berlin, Germany”) from the list
● Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

####Feature 2: Show/hide an event's details User story:
As a user, i want to expand hide details of an event, to see more informations
Scenario 1: An event element is collapsed by default
● Given The User sees the collapsed Event Info
● When The user klicks on the event panel
● Then the event’s details will not be visible
Scenario 2: User can expand an event to see its details
● GivenThe Users sees the collapsed Event Info
● When user clicks a event panel
● Then the details will be shown
Scenario 3: User can collapse an event to hide its details
● Given The details of the event are shown
● When The user clicks on “Close” Button
● Then The details close and hide

####Feature 3: Specify number of events User story:
As a user, i want to specify, how many events shall be shown while a take a look, because too much information can stress me out.
Scenario 1: When user hasn’t specified a number, 32 is the default number
● Given The user is in the app and can make a choice, how many events to be shown
● When The user starts search without entry
● Then Max. 32 events will be shown
Scenario 2: User can change the number of events they want to see
● Given The User can enter a number of events he wants to be shown
● When User enters a number and confirms
● Then The number of events, the user asked for, will be shown

####Feature 4: Use the app when offline User story:
As a user i want to get notification when i am offline and still be possible to see the details of my last session
Scenario 1: Show cached data when there’s no internet connection
● Given User had App opened with an active Internet connection
● When User opens App without internet connection
● Then The the data from the last cached session will be shown
Scenario 2: Show error when user changes the settings (city, time range)
● Given User opens the app without Internet connection and data from last session
● When User changes city or time range
● Then User gets error message because of the missing internet connection

####Feature 5: Data visualization User story:
As a user i want to how many events are in the city so this could help me, find the right event for me if there are many or less.
Scenario 1: Show a chart with the number of upcoming events in each city
● Given User sees list of the upcoming events in all cities
● When The user clicks on e.g. “Show me” Button
● Then A chart opens with numbers of the upcoming events

write an explanation for how you’ll use serverless functions.

For the Meet app, I am using serverless functions for various purposes. One of the cases for serverless functions in the Meet app will be user authentication and authorization. I will use AWS Lambda to handle user authentication and authorization, providing a secure and reliable authentication process for our users. Additionally, I plan to use serverless functions for image processing. I will use AWS Lambda to handle image processing, allowing for efficient processing and storage of images without overloading our servers. This ensures that the app can handle high volumes of media files while providing fast and reliable processing.
Overall, the use of serverless functions in my Meet app allows us to provide users with a fast, scalable, and secure experience. By utilizing serverless technology, I can provide a reliable and efficient application that can handle high volumes of traffic without sacrificing performance or security.
