import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {HeroComponentStyles} from './HeroComponentStyle';
import {colors} from '../../style';

//HeroComponent - A styled component that renders a touchable opacity, text and image.
//It's function is to display the hero's name and image on the Heroes screen, and when pressed it will navigate to the Hero Details with this hero's data.
//An activity indicator is displayed while the image is loading.
//This component and as 3 params:
// - item as the hero data;
// - showAll as the value to check the the list displays 4 or 8 heroes, and it's used to style depending on the amount of heroes displayed;
// - navigation to use instead of making const navigation = useNavigation(); and it's used to navigate to the hero details on press.

const HeroComponent = ({item, showAll, navigation}) => {
  // State to hold the loading image value.
  const [loading, setLoading] = useState(true);
  return (
    <TouchableOpacity
      style={
        showAll
          ? HeroComponentStyles.containerFullHeight
          : HeroComponentStyles.containerPartialHeight
      }
      onPress={() => {
        navigation.navigate('HeroDetailsScreen', {hero: item});
      }}
      testID="heroComponent">
      {loading && (
        <ActivityIndicator
          size={'large'}
          color={colors.blue}
          testID="ActivityIndicator"
        />
      )}
      <Image
        style={[
          HeroComponentStyles.heroImage,
          loading && [HeroComponentStyles.loadingImage],
        ]}
        source={{uri: item.images.md}}
        onLoad={() => setLoading(false)}
        testID="Image.heroComponent"
      />
      <Text style={HeroComponentStyles.name} testID="Name.heroComponent">
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HeroComponent;
