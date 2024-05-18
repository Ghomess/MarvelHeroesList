import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../style';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text testID="Login">Login Screen</Text>
    </View>
  );
};

export default LoginScreen;
