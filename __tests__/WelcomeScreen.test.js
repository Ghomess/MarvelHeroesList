import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

//Mock navigation.navigate function
const mockNavigate = jest.fn();
const createTestProps = props => ({
  navigation: {
    navigate: mockNavigate,
    ...props,
  },
});

describe('Welcome Screen', () => {
  test('renders Welcome screen', () => {
    const {getByTestId} = render(<WelcomeScreen />);

    const welcomeScreen = getByTestId('View.WelcomeScreen');
    const image = getByTestId('Image.WelcomeScreen');
    const text = getByTestId('Text.WelcomeScreen');
    const button = getByTestId('button');
    expect(welcomeScreen).toBeTruthy();
    expect(image).toBeTruthy();
    expect(text).toBeTruthy();
    expect(button).toBeTruthy();
  });

  test('function is called when button is pressed', async () => {
    const props = createTestProps({});
    const {getByTestId} = render(<WelcomeScreen {...props} />);

    const button = getByTestId('button');

    fireEvent.press(button);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
