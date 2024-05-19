import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

//Mock navigation.navigate function
const mockNavigate = jest.fn();
const createTestProps = props => ({
  navigation: {
    navigate: mockNavigate,
    ...props,
  },
});

describe('Login Screen', () => {
  test('renders login screen', () => {
    const {getByTestId, getAllByTestId} = render(<LoginScreen />);

    const loginScreen = getByTestId('View.LoginScreen');
    const image = getByTestId('Image.LoginScreen');
    const textInputs = getAllByTestId('input');
    const button = getByTestId('button');
    expect(loginScreen).toBeTruthy();
    expect(image).toBeTruthy();
    expect(textInputs.length).toBe(2);
    expect(button).toBeTruthy();
  });

  test('allows users to input username and password', () => {
    const {getAllByTestId} = render(<LoginScreen />);

    const [usernameInput, passwordInput] = getAllByTestId('input');

    fireEvent.changeText(usernameInput, 'user123');
    fireEvent.changeText(passwordInput, 'password123');

    expect(usernameInput.props.value).toBe('user123');
    expect(passwordInput.props.value).toBe('password123');
  });

  test('function is called when button is pressed', async () => {
    const props = createTestProps({});
    const {getByTestId} = render(<LoginScreen {...props} />);

    const button = getByTestId('button');

    fireEvent.press(button);

    // Wait for the authentication to complete
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
