import React from 'react';
import {Text, View} from 'react-native';
import {heroAppearanceDetailsComponentStyles} from './HeroAppearanceDetailsComponentStyle';

//HeroAppearanceDetailsComponent - A styled component that renders two texts in column.
//It's function is to display the gender and the race values in the Hero Details screen
// and as two params:
//title as the first text displayed in the column with a larger font size than the value
//and value as the second text displayed in the column with a smaller font size than the title

//if the value does not exist, it will appear as "Unknown"
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
