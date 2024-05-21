import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import PowerStatDetailComponent from '../components/PowerStatDetailComponent/PowerStatDetailComponent';

describe('PowerStatDetailComponent', () => {
  test('renders HeroDetailsScreen with all details', async () => {
    const {getByText} = render(
      <PowerStatDetailComponent title={'Combat'} value={'80'} />,
    );

    expect(getByText('Combat:')).toBeTruthy();
    expect(getByText('80')).toBeTruthy();
  });
});
