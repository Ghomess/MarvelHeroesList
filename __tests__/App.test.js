import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';
import {superHeroesApi} from '../api/superHeroesApi';
import store from '../redux/store';
import {logout} from '../redux/reducers/authSlicer';
import {Provider} from 'react-redux';

describe('Navigation Stack', () => {
  test('renders login screen by default', () => {
    const {getByTestId, getAllByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>,
    );
    //gets a view from login screen
    const loginScreen = getByTestId('View.LoginScreen');
    //gets a image from login screen
    const image = getByTestId('Image.LoginScreen');
    //gets the textinputs from login screen
    const textInputs = getAllByTestId('input');

    expect(loginScreen).toBeTruthy();
    expect(image).toBeTruthy();
    expect(textInputs.length).toBe(2);
  });

  test('navigates to Welcome screen when login button is pressed', async () => {
    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>,
    );
    //gets the login button and presses it
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      //checks if the user went to the Welcome screen by searching for Welcome text in the header
      expect(getByText('Welcome')).toBeTruthy();
    });
  });

  test('navigates to Heroes screen when See Heroes button is pressed', async () => {
    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>,
    );
    //gets the login button and presses it
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      //checks if the user went to the Welcome screen by searching for Welcome text in the header
      expect(getByText('Welcome')).toBeTruthy();
      //gets the See Heroes button and presses it
      fireEvent.press(getByText('See Heroes'));
      //checks if the user went to the Heroes screen by searching for Heroes text in the header
      expect(getByText('Heroes')).toBeTruthy();
    });
  });

  test('navigates to Hero Details screen when HeroComponent is pressed', async () => {
    const {getByTestId, getByText, getAllByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>,
    );
    //gets the login button and presses it
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      //checks if the user went to the Welcome screen by searching for Welcome text in the header
      expect(getByText('Welcome')).toBeTruthy();
    });
    //gets the See Heroes button and presses it
    fireEvent.press(getByTestId('button'));
    //checks if the user went to the Heroes screen by searching for Heroes text in the header
    expect(getByText('Heroes')).toBeTruthy();
    //fetches data from the superHeroesApi by executing the superHeroesApi function
    const superHeroesResult = await superHeroesApi();
    //checks if the superHeroesResult has the data from the api
    expect(superHeroesResult).toBeTruthy();
    await waitFor(() => {
      //gets all the heroes rendered by getting all the hero componet ids
      const heroComponents = getAllByTestId('heroComponent');
      //gets the search input
      const searchInput = getByTestId('input');
      //check if the search input exists
      expect(searchInput).toBeTruthy();
      //check if there are 4 heroComponents, as this is the initial amount of data displayed
      expect(heroComponents.length).toBe(4);
    });

    //gets the first hero that appears
    const [firstHero] = getAllByTestId('heroComponent');
    //presses the first hero that appears
    fireEvent.press(firstHero);
    //Checks if the user went to the Hero Details screen by checking if the header title is Hero Details
    expect(getByText('Hero Details')).toBeTruthy();

    // Check hero details
    expect(getByTestId('Image.HeroDetailsScreen')).toBeTruthy();
    // Check appearance details
    expect(getByText('Gender')).toBeTruthy();
    expect(getByText('Race')).toBeTruthy();

    // Check power stats title
    expect(getByText('Power Stats')).toBeTruthy();

    // Check each power stat
    expect(getByText('Combat:')).toBeTruthy();
    expect(getByText('Intelligence:')).toBeTruthy();
    expect(getByText('Speed:')).toBeTruthy();
    expect(getByText('Durability:')).toBeTruthy();
    expect(getByText('Power:')).toBeTruthy();
    expect(getByText('Strength:')).toBeTruthy();
  });

  test('navigates to Login screen when Logout Button is pressed', async () => {
    const dispatchMock = jest.spyOn(store, 'dispatch');
    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>,
    );
    //gets the login button and presses it
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      //checks if the user went to the Welcome screen by searching for Welcome text in the header
      expect(getByText('Welcome')).toBeTruthy();
    });
    //gets the logout button
    const button = getByTestId('Button.LogoutButton');
    //checks if the logout button exists
    expect(button).toBeTruthy();
    //presses the logout button
    fireEvent.press(button);
    //checks if a dispatch was called with the logout reducer
    expect(dispatchMock).toHaveBeenCalledWith(logout());
  });
});
