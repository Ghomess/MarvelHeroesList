import React from 'react';
import {Text, View} from 'react-native';
import {powerStatDetailComponentStyles} from './PowerStatDetailComponentStyles';

//PowerStatDetailComponent - A styled component that renders two texts in row.
//It's function is to display the stats values of the hero individualy (e.g. speed: 20) in the Hero Details screen
//This component has two params:
//title as the first text displayed in the row with a larger font size than the value
//and value as the second text displayed in the row with a smaller font size than the title

//if the value does not exist, it appears as 0
const PowerStatDetailComponent = ({title, value}) => (
  <View
    style={powerStatDetailComponentStyles.textContainer}
    testID="View.PowerStatDetailComponent">
    <Text
      style={powerStatDetailComponentStyles.descriptionTitle}
      testID="Title.PowerStatDetailComponent">
      {title}:
    </Text>
    <Text
      style={powerStatDetailComponentStyles.description}
      testID="Value.PowerStatDetailComponent">
      {value || 0}
    </Text>
  </View>
);
export default PowerStatDetailComponent;
