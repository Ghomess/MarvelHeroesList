import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import InputComponent from '../components/InputComponent/InputComponent';

describe('Input Component', () => {
  test('renders the input component', () => {
    const {getByTestId} = render(
      <InputComponent
        placeholder="Test"
        value=""
        setValue={() => {}}
        secureTextEntry={false}
      />,
    );

    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });
  test('updates its state when the user types into the input field', () => {
    const setValueMock = jest.fn();

    const {getByTestId} = render(
      <InputComponent
        placeholder="Test"
        value=""
        setValue={setValueMock}
        secureTextEntry={false}
      />,
    );

    const input = getByTestId('input');

    fireEvent.changeText(input, 'test123');

    expect(setValueMock).toHaveBeenCalledWith('test123');
  });
});
