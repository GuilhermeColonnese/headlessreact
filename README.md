# headlessreact
An Application to example a Headless CMS

A React application that fetches and displays news articles from a Liferay Headless Delivery API. The app retrieves content dynamically, sorts it by publication date, and displays it in a grid layout. 

## Features

- **Fetch Liferay Content**: Retrieves structured content from a Liferay DXP instance using the Headless Delivery API.
- **Automatic Updates**: Refreshes the content every 3 seconds for real-time updates.
- **HTML Parsing and Truncation**: Strips HTML tags from content and truncates text for clean and concise displays.
- **Environment Variables**: Securely manages API credentials and URLs through a `.env` file.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For handling HTTP requests.
- **JavaScript**: Core programming language for functionality.
- **CSS**: For styling the application.

## Structure Content

To the cards works properly, you'll need to import the JSON file with the structure content. It's located at Structure Folder.

## Update CORS policy on Liferay
It's important to config a CORS policy to enable cross-origin


## Run as a custom service on PaaS

Follow these steps to run the application locally:

1. Clone the repository

2. Create a .env file in the root directory and configure the following environment variables:

REACT_APP_API_URL=<Your Liferay API URL>
REACT_APP_AUTH_USERNAME=<Your API Username>
REACT_APP_AUTH_PASSWORD=<Your API Password>

4. On App.js you will need to update the id from Content Structure on line 19: const response = await axios.get(`${apiUrl}/o/headless-delivery/v1.0/content-structures/33619/structured-contents`, {
5. On setupProxy.js you'll need to update the URL from Liferay to redirect the API's to the application: on line 7 just change the URL: target: 'https://webserver-projectid-prd.lfr.cloud',  

6. Deploy on your environment the repository-folder

7. Will create a new docker container with the application running

## Application Structure

    App.js: The main component that handles fetching and displaying the content.
    App.css: Contains styles for the grid layout and cards.
    DOMParser: Used to strip HTML tags from content for clean rendering.
    Environment Variables: Secure API credentials are retrieved from the .env file.

## Environment Variables

The app uses a .env file to manage sensitive information such as API credentials. Example:

REACT_APP_API_URL=https://your-liferay-instance-url.com
REACT_APP_AUTH_USERNAME=your-username
REACT_APP_AUTH_PASSWORD=your-password

## Installation to run Localhost

Follow these steps to run the application locally:

1. Clone the repository

2. Install dependencies:

npm install

3. Create a .env file in the root directory and configure the following environment variables:

REACT_APP_API_URL=<Your Liferay API URL>
REACT_APP_AUTH_USERNAME=<Your API Username>
REACT_APP_AUTH_PASSWORD=<Your API Password>

4. On App.js you will need to update the id from Content Structure on line 19: const response = await axios.get(`${apiUrl}/o/headless-delivery/v1.0/content-structures/33619/structured-contents`, {
5. On setupProxy.js you'll need to update the URL from Liferay to redirect the API's to the application: on line 7 just change the URL: target: 'https://webserver-lctdemobrazilse-prd.lfr.cloud',  

6. Start the development server:

npm start

7. Open the application in your browser:

    http://localhost:3000


## Application Structure

    App.js: The main component that handles fetching and displaying the content.
    App.css: Contains styles for the grid layout and cards.
    DOMParser: Used to strip HTML tags from content for clean rendering.
    Environment Variables: Secure API credentials are retrieved from the .env file.

## Environment Variables

The app uses a .env file to manage sensitive information such as API credentials. Example:

REACT_APP_API_URL=https://your-liferay-instance-url.com
REACT_APP_AUTH_USERNAME=your-username
REACT_APP_AUTH_PASSWORD=your-password

## Key Functionalities

    Fetching Content:
        Uses Axios to make GET requests to the Liferay API.
        Authorization is handled via Basic Authentication with credentials stored in environment variables.

    Dynamic Updates:
        Fetches new content every 3 seconds to keep the displayed information up-to-date.

    Content Sorting:
        Sorts articles by their datePublished field in descending order.

    HTML Parsing:
        Cleans and truncates HTML content for better readability using a DOMParser.

## Deployment

    For production, ensure that environment variables are set in your deployment environment.
    Build the production-ready version:

    npm run build

    Deploy the contents of the build folder to your hosting platform.


For questions or support, please contact:

    Author: Guilherme Colonnese
    Email: guilherme.colonnese@liferay.com




