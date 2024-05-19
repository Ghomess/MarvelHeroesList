import React from 'react';
import {TextInput, View} from 'react-native';
import {InputComponentStyles} from './InputComponentStyle';
import {colors} from '../../style';

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
