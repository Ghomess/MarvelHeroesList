import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';

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
