import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import HeroComponent from '../components/HeroComponent/HeroComponent';

//Mock navigation.navigate function
const mockNavigate = jest.fn();
const createTestProps = props => ({
  navigation: {
    navigate: mockNavigate,
    ...props,
  },
});

const mockItem = {
  id: 1,
  name: 'Spiderman',
  image:
    'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
};
describe('Hero Component Screen', () => {
  test('renders HeroComponent screen', () => {
    const props = createTestProps({});

    const {getByTestId} = render(
      <HeroComponent
        item={mockItem}
        showAll={true}
        navigation={mockNavigate}
        {...props}
      />,
    );

    const heroComponent = getByTestId('heroComponent'); //Touchable Opacity
    const ImageheroComponent = getByTestId('Image.heroComponent'); //Image
    const NameheroComponent = getByTestId('Name.heroComponent'); //Name

    expect(heroComponent).toBeTruthy();
    expect(ImageheroComponent).toBeTruthy();
    expect(NameheroComponent).toBeTruthy();
  });

  test('navigates to Hero Details screen when HeroComponent is pressed', async () => {
    const props = createTestProps({});
    const {getByTestId} = render(
      <HeroComponent
        item={mockItem}
        showAll={true}
        navigation={mockNavigate}
        {...props}
      />,
    );
    const heroComponent = getByTestId('heroComponent');
    fireEvent.press(heroComponent);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
