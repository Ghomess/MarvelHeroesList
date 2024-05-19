import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonComponentStyles} from './ButtonComponentStyle';

const ButtonComponent = ({placeholder, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="button"
      style={ButtonComponentStyles.container}>
      <Text style={ButtonComponentStyles.text} testID="buttonPlaceholder">
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
