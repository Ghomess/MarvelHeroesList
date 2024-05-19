import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
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
});
