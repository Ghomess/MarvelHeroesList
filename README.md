# Marvel Heroes List by Tiago Gomes

Welcome to my Marvel Heroes List! This app is built using React Native and serves to test my React Native skills.

## Features

- Login Screen:

  - Username input field.
  - Password input field.
  - Login button.

- Mock Authentication:

  - Authentication process is simulated (mocked).
  - Allows access with any username/password combination.

- Welcome Screen:

  - Displays a welcome message.
  - Button labeled "See Heroes".

- Heroes Screen:

  - Fetches and displays 4 random heroes initially using this API: https://rapidapi.com/jakash1997/api/superhero-search.
  - Includes a "Show More" button to display an additional 4 random heroes.
  - Each hero is clickable.
  - Back button to return to the Welcome screen.

- Hero Detail Screen:

  - Shows detailed information about the selected hero.
  - Back button to return to the Heroes screen.

- Additional Features:

  - Error handling for failed data fetching.
  - Loading indicators during data fetching.
  - Loading state while loading hero images.

## Third-Party Libraries

Here's a list of third-party libraries used in this project and their purposes:

- **@react-navigation**: React Navigation is used for handling navigation within the app. It provides a flexible and customizable way to navigate between screens, a fast and effective way to add a stack navigatior, bottom tab navigator and a drawer navigatior. It's also one of the most used third-party libraries to handle navigation.

- **react-native-dotenv**: React Native DotEnv is a Babel plugin for injecting environment variables into the app. It's used to add the API keys as an environment variable.

- **react-native-vector-icons**: React Native Vector Icons is used for adding icons to the app. It provides a wide range of customizable icons that can be easily integrated into the app.

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/Ghomess/MarvelHeroesList.git

2. Navigate to the project directory:

   cd MarvelHeroesList

3. Install dependencies:

   npm install

   or

   yarn install

4. Create an .env file to add the API key (https://rapidapi.com/jakash1997/api/superhero-search) using the following code:

   REACT_APP_API_KEY=yourapikey

## Usage

To run the app on your local machine, you can use the following commands:

For iOS:

    npx react-native run-ios

For Android:

    npx react-native run-android
