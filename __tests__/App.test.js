import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';

describe('Navigation Stack', () => {
  test('renders home screen by default', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
    );

    expect(getByTestId('Login')).toBeTruthy();
  });

  /*  test('navigates to Welcome screen when button is pressed', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('Login'));
    expect(getByTestId('Welcome Screen')).toBeTruthy();
  }); */
});
