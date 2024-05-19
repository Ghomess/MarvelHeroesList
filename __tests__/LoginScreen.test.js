import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

describe('Login Screen', () => {
  test('renders login screen', () => {
    const {getByTestId, getAllByTestId} = render(<LoginScreen />);

    const loginScreen = getByTestId('View.LoginScreen');
    const image = getByTestId('Image.LoginScreen');
    const textInputs = getAllByTestId('input');

    expect(loginScreen).toBeTruthy();
    expect(image).toBeTruthy();
    expect(textInputs.length).toBe(2);
  });

  test('allows users to input username and password', () => {
    const {getAllByTestId} = render(<LoginScreen />);

    const [usernameInput, passwordInput] = getAllByTestId('input');

    fireEvent.changeText(usernameInput, 'user123');
    fireEvent.changeText(passwordInput, 'password123');

    expect(usernameInput.props.value).toBe('user123');
    expect(passwordInput.props.value).toBe('password123');
  });
});
