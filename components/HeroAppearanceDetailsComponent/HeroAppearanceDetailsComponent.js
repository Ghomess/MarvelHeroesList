import React from 'react';
import {Text, View} from 'react-native';
import {heroAppearanceDetailsComponentStyles} from './HeroAppearanceDetailsComponentStyle';

const HeroAppearanceDetailsComponent = ({title, value}) => (
  <View
    style={heroAppearanceDetailsComponentStyles.heroDetail}
    testID="View.HeroAppearance">
    <Text
      style={[
        heroAppearanceDetailsComponentStyles.description,
        heroAppearanceDetailsComponentStyles.descriptionTitle,
      ]}
      testID={(title, '.HeroAppearance')}>
      {title}
    </Text>
    <Text style={heroAppearanceDetailsComponentStyles.description}>
      {value || 'Unknown'}
    </Text>
  </View>
);

export default HeroAppearanceDetailsComponent;
