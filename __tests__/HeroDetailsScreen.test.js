import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HeroDetailsScreen from '../screens/HeroDetailsScreen/HeroDetailsScreen';

const createTestProps = props => ({
  route: {
    params: {
      hero: {
        name: 'SpiderMan',
        appearance: {gender: 'Male', race: 'Human'},
        powerstats: {
          combat: 80,
          intelligence: 90,
          speed: 75,
          durability: 85,
          power: 95,
          strength: 70,
        },
        images: {md: 'some_image_url'},
      },
    },
    ...props,
  },
});

describe('HeroDetailsScreen', () => {
  test('renders HeroDetailsScreen with all details', async () => {
    const props = createTestProps({});
    const {getByTestId, getByText} = render(<HeroDetailsScreen {...props} />);

    // Check if main container is rendered
    const heroDetailsScreen = getByTestId('View.HeroDetailsScreen');
    expect(heroDetailsScreen).toBeTruthy();

    // Check hero details
    expect(getByText('SpiderMan')).toBeTruthy();
    expect(getByTestId('Image.HeroDetailsScreen')).toBeTruthy();

    // Check appearance details
    expect(getByText('Gender')).toBeTruthy();
    expect(getByText('Male')).toBeTruthy();
    expect(getByText('Race')).toBeTruthy();
    expect(getByText('Human')).toBeTruthy();

    // Check power stats title
    expect(getByText('Power Stats')).toBeTruthy();

    // Check each power stat
    expect(getByText('Combat:')).toBeTruthy();
    expect(getByText('80')).toBeTruthy();
    expect(getByText('Intelligence:')).toBeTruthy();
    expect(getByText('90')).toBeTruthy();
    expect(getByText('Speed:')).toBeTruthy();
    expect(getByText('75')).toBeTruthy();
    expect(getByText('Durability:')).toBeTruthy();
    expect(getByText('85')).toBeTruthy();
    expect(getByText('Power:')).toBeTruthy();
    expect(getByText('95')).toBeTruthy();
    expect(getByText('Strength:')).toBeTruthy();
    expect(getByText('70')).toBeTruthy();
  });
});
