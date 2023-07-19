# Simple Weather Diary

This is a simple weather diary app that allows a user to:

1. Enter their zip code 
2. Make a comment
3. Click a button to generate the current weather and save their comment to a diary
4. View their saved weather and comment

The app does the following:

1. Makes an API call to the OpenWeatherMap API using the zip code to get the current temperature 
2. Creates a new date instance to get the current date
3. Posts the temperature, date, and comment to an express server endpoint using Fetch
4. The express server saves the data to a JSON file 
5. When the UI is updated, a GET request is made to the express server to retrieve the saved data
6. The saved temperature, date, and comment are displayed on the UI

The app uses:

- HTML for the UI elements 
- CSS for basic styling
- JavaScript for:
  - Making API calls
  - POSTing and GETing data from the express server
  - Updating the UI
  - Generating the date
- An express server to:
  - Serve the static files 
  - Handle the POST and GET requests
  - Save and retrieve data from a JSON file

To run the app:

1. Run `npm install` to install the express dependencies  
2. Run `node server.js` to start the express server
3. Open `index.html` in your browser

You can then:

- Enter a zip code 
- Type a comment 
- Click the "Generate" button
- See your saved weather and comment displayed below
- Make new requests to generate more diary entries

Hope this helps explain the weather diary app! Let me know if you have any other questions.
