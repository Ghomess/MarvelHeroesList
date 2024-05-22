import React from 'react';
import {TextInput, View} from 'react-native';
import {InputComponentStyles} from './InputComponentStyle';
import {colors} from '../../style';

//InputComponent - A styled component that renders a text input surrounded by a view.
//It's function is to display a styled text input on the Login screen and Heroes screen.
//This component and as 4 params:
// - placeholder as the text input placeholder;
// - value as the value of the text input;
// - setValue to update the value with the text input text on change.
// - secureTextEntry to hide the text entered, is used on password input text

const InputComponent = ({placeholder, value, setValue, secureTextEntry}) => {
  return (
    <View style={InputComponentStyles.container}>
      <TextInput
        style={InputComponentStyles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={text => setValue(text)}
        cursorColor={colors.blue}
        secureTextEntry={secureTextEntry}
        testID="input"
      />
    </View>
  );
};

export default InputComponent;
