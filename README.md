# React Native App - Post Viewer

This is a simple React Native app that demonstrates fetching data from an API and displaying it in a FlatList. The app consists of three screens: Login Screen, Home Screen, and Detail Screen.

## Installation

1. Clone the repository:

   ```bash
   git clonehttps://github.com/geekgupta/Together

   npm install
# or
yarn install


npm start
# or
yarn start
This will start the Metro Bundler and provide you with options to run the app on different platforms.

Screens and Features
1. Login Screen
The Login Screen allows users to enter their username and password. Upon successful login, users are navigated to the Home Screen. Authentication is implemented with a basic mechanism for demonstration purposes.

2. Home Screen
The Home Screen displays a list of posts fetched from the JSONPlaceholder API. The list is presented using a FlatList component, which supports pull-to-refresh and pagination for smooth user experience. Each post in the list is tappable, leading to the Detail Screen.

3. Detail Screen
The Detail Screen displays the full details of a selected post. It provides a simple way to view the content of the post in a user-friendly manner.

Project Structure
The project is structured as follows:

src/
├── screens/
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── DetailScreen.js
├── App.js
└── ...
src/screens/ contains the components for each screen of the app.
App.js is the entry point of the app.


