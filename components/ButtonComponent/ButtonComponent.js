import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonComponentStyles} from './ButtonComponentStyle';

//ButtonComponet - A styled component that renders a button with two params:
//placeholder as the text displayed in the button
//and onPress as the onPress function of the button
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
