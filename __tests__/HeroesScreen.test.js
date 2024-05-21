import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import HeroesScreen from '../screens/HeroesScreen/HeroesScreen';
import {superHeroesApi} from '../api/superHeroesApi';

//Mock navigation.navigate function
const mockNavigate = jest.fn();
const createTestProps = props => ({
  navigation: {
    navigate: mockNavigate,
    ...props,
  },
});

describe('Heroes Screen', () => {
  test('renders Heroes screen', async () => {
    const {getByTestId, getAllByTestId} = render(<HeroesScreen />);

    const heroesScreen = getByTestId('View.HeroesScreen');

    const authResult = await superHeroesApi();
    expect(authResult).toBeTruthy();
    await waitFor(() => {
      const heroComponents = getAllByTestId('heroComponent');
      const button = getByTestId('button');
      expect(heroesScreen).toBeTruthy();

      expect(heroComponents.length).toBeGreaterThan(1);
      expect(button).toBeTruthy();
    });
  });

  test('navigates to Hero Details screen when HeroComponent is pressed', async () => {
    const props = createTestProps({});
    const {getAllByTestId} = render(<HeroesScreen {...props} />);
    const authResult = await superHeroesApi();
    expect(authResult).toBeTruthy();
    await waitFor(() => {
      const heroComponents = getAllByTestId('heroComponent');

      const [firstHero] = heroComponents;
      expect(firstHero).toBeTruthy();
      fireEvent.press(firstHero);
    });
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  test('Show more Heroes when "Show More" button is pressed and hide when "Show Less" button is pressed', async () => {
    const props = createTestProps({});
    const {getAllByTestId, getByText} = render(<HeroesScreen {...props} />);
    const authResult = await superHeroesApi();
    expect(authResult).toBeTruthy();

    await waitFor(() => {
      const buttonShowMore = getByText('Show More');

      fireEvent.press(buttonShowMore);
    });
    await waitFor(() => {
      const heroComponents = getAllByTestId('heroComponent');
      expect(heroComponents.length).toBe(8);

      heroComponents.forEach((component, index) => {
        expect(component).toBeTruthy();
      });
    });

    const buttonShowLess = getByText('Show Less');
    fireEvent.press(buttonShowLess);

    const updatedHeroComponents = getAllByTestId('heroComponent');
    expect(updatedHeroComponents.length).toBe(4);

    updatedHeroComponents.forEach((component, index) => {
      expect(component).toBeTruthy();
    });
  });
});
