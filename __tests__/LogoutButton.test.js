import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import store from '../redux/store';
import {logout} from '../redux/reducers/authSlicer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

describe('Logout Button', () => {
  test('renders Logout button', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <LogoutButton />
        </NavigationContainer>
      </Provider>,
    );

    const button = getByTestId('Button.LogoutButton');
    expect(button).toBeTruthy();
  });

  test('updates auth state when the user presses the logout button', () => {
    const dispatchMock = jest.spyOn(store, 'dispatch');
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <LogoutButton />
        </NavigationContainer>
      </Provider>,
    );

    const button = getByTestId('Button.LogoutButton');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(dispatchMock).toHaveBeenCalledWith(logout());
  });
});
