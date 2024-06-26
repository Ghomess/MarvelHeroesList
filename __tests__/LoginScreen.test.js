import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from '../redux/store';
import {login} from '../redux/reducers/authSlicer';

//Mock navigation.navigate function
const mockNavigate = jest.fn();
const createTestProps = props => ({
  navigation: {
    replace: mockNavigate,
    ...props,
  },
});

describe('Login Screen', () => {
  test('renders login screen', () => {
    const {getByTestId, getAllByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>,
    );

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
    const {getAllByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>,
    );

    const [usernameInput, passwordInput] = getAllByTestId('input');

    fireEvent.changeText(usernameInput, 'user123');
    fireEvent.changeText(passwordInput, 'password123');

    expect(usernameInput.props.value).toBe('user123');
    expect(passwordInput.props.value).toBe('password123');
  });

  test('function is called when button is pressed', async () => {
    const props = createTestProps({});
    const dispatchMock = jest.spyOn(store, 'dispatch');
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen {...props} />
        </NavigationContainer>
      </Provider>,
    );

    const button = getByTestId('button');

    fireEvent.press(button);

    // Wait for the authentication to complete
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
      expect(dispatchMock).toHaveBeenCalledWith(login());
    });
  });
});
