import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';
import {superHeroesApi} from '../api/superHeroesApi';

describe('Navigation Stack', () => {
  test('renders login screen by default', () => {
    const {getByTestId, getAllByTestId} = render(
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
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
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      expect(getByText('Welcome')).toBeTruthy();
    });
  });

  test('navigates to Heroes screen when See Heroes button is pressed', async () => {
    const {getByTestId, getByText} = render(
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
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
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
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
      const [firstHero] = getAllByTestId('heroComponent');
      fireEvent.press(firstHero);
      expect(getByText('Hero Details')).toBeTruthy();
    });
  });
});
