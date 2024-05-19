import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

describe('Button Component', () => {
  const onPressMock = jest.fn();
  test('renders the button component', () => {
    const {getByTestId, getByText} = render(
      <ButtonComponent onPress={onPressMock} placeholder={'Test'} />,
    );

    const button = getByTestId('button');
    const placeholder = getByTestId('buttonPlaceholder');
    expect(button).toBeTruthy();
    expect(placeholder).toBeTruthy();
    expect(getByText('Test')).toBeTruthy();
  });
  test('function is called when button is pressed', () => {
    const {getByTestId} = render(
      <ButtonComponent onPress={onPressMock} placeholder={'Test'} />,
    );

    const button = getByTestId('button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
