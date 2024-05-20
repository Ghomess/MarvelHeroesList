import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {HeroComponentStyles} from './HeroComponentStyle';

const HeroComponent = ({item, showAll, navigation}) => {
  return (
    <TouchableOpacity
      style={
        showAll
          ? HeroComponentStyles.containerFullHeight
          : HeroComponentStyles.containerPartialHeight
      }
      onPress={() => {
        navigation.navigate('HeroDetailsScreen', {item});
      }}
      testID="heroComponent">
      <Image
        style={HeroComponentStyles.heroImage}
        source={{uri: item.image}}
        testID="Image.heroComponent"
      />
      <Text style={HeroComponentStyles.name} testID="Name.heroComponent">
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HeroComponent;
