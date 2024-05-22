import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import LogoutButton from '../components/LogoutButton/LogoutButton';
import store from '../redux/store';
import {logout} from '../redux/reducers/authSlicer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Mock navigation method
jest.mock('@react-navigation/native');
describe('Logout Button', () => {
  test('renders Logout button', () => {
    // Mock useNavigation to return a navigation object with replace method
    useNavigation.mockReturnValue({replace: jest.fn()});

    const {getByTestId} = render(
      <Provider store={store}>
        <LogoutButton />
      </Provider>,
    );

    const button = getByTestId('Button.LogoutButton');
    expect(button).toBeTruthy();
  });

  test('updates auth state when the user presses the logout button', () => {
    // Mock useNavigation to return a navigation object with replace method
    useNavigation.mockReturnValue({replace: jest.fn()});
    const dispatchMock = jest.spyOn(store, 'dispatch');
    const {getByTestId} = render(
      <Provider store={store}>
        <LogoutButton />
      </Provider>,
    );

    const button = getByTestId('Button.LogoutButton');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(dispatchMock).toHaveBeenCalledWith(logout());
  });
});
