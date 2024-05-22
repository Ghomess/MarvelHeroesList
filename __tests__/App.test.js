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
    const loginScreen = getByTestId('View.LoginScreen');
    const image = getByTestId('Image.LoginScreen');
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

    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
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

    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      expect(getByText('Welcome')).toBeTruthy();
      fireEvent.press(getByText('See Heroes'));
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

    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      expect(getByText('Welcome')).toBeTruthy();
    });
    fireEvent.press(getByTestId('button'));
    expect(getByText('Heroes')).toBeTruthy();
    const authResult = await superHeroesApi();
    expect(authResult).toBeTruthy();
    await waitFor(() => {
      const heroComponents = getAllByTestId('heroComponent');
      expect(heroComponents.length).toBe(4);
    });
    const [firstHero] = getAllByTestId('heroComponent');

    fireEvent.press(firstHero);

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
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      expect(getByText('Welcome')).toBeTruthy();
    });
    const button = getByTestId('Button.LogoutButton');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(dispatchMock).toHaveBeenCalledWith(logout());
  });
});
