import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HeroAppearanceDetailsComponent from '../components/HeroAppearanceDetailsComponent/HeroAppearanceDetailsComponent';

describe('HeroAppearanceDetailsComponent', () => {
  test('renders HeroAppearanceDetailsComponent', async () => {
    const {getByText} = render(
      <HeroAppearanceDetailsComponent title={'Gender'} value={'Male'} />,
    );

    // Check appearance details
    expect(getByText('Gender')).toBeTruthy();
    expect(getByText('Male')).toBeTruthy();
  });
});
