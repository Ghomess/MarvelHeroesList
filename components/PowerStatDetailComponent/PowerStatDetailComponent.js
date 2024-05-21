import React from 'react';
import {Text, View} from 'react-native';
import {powerStatDetailComponentStyles} from './PowerStatDetailComponentStyles';

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
