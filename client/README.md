# GearTrade

## Description

GearTrade is a Single Page Application (SPA) for publishing and trading car parts. The application allows guests to browse a catalog of car parts and view detailed information, while registered users can actively participate by adding new parts and commenting on existing ones.

## Features

* Public catalog of car parts
* View details of each car part
* User registration and login
* Add new car parts (authenticated users)
* Edit and delete car parts added by the logged-in user
* Comment on car parts (authenticated users)
* Personal page showing only your own car parts
* User profile page with additional personal information

## Technologies

* React
* JavaScript (ES6+)
* Tailwind CSS
* HTML5
* REST API
* SoftUni Practice Server

## Setup

To run the project locally, follow these steps:

### Client

1. Navigate to the client folder
2. Install dependencies:

   ```
   npm i
   ```
3. Start the development server:

   ```
   npm run dev
   ```

### Server

1. Navigate to the server folder
2. Start the SoftUni Practice Server:

   ```
   node server.js
   ```

## Business Rules

* Guests can only view the catalog and car part details
* Only registered users can add comments and publish new car parts
* Users can edit and delete only the car parts they have created
* Each user has access to a personal page with their own car parts

## Project Structure

* client/

  * src/

    * components/
    * pages/
    * services/
    * hooks/
    * App.jsx
* server/

  * server.js

## Author

* Name: Pavel Krastev
* Course: React – SoftUni

## License

This project is developed for educational purposes.
