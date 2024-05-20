import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {HeroComponentStyles} from './HeroComponentStyle';
import {colors} from '../../style';

const HeroComponent = ({item, showAll, navigation}) => {
  const [loading, setLoading] = useState(true);
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
