import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {styles} from '../../style';
import InputComponent from '../../components/InputComponent/InputComponent';
import {loginScreenStyles} from './LoginScreenStyle';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[styles.container, loginScreenStyles.container]}
      testID="View.LoginScreen">
      <Image
        testID="Image.LoginScreen"
        style={loginScreenStyles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png',
        }}
      />

      <View style={loginScreenStyles.buttonContainer}>
        <InputComponent
          testID="UsernameInput.LoginScreen"
          placeholder={'Username'}
          setValue={setUsername}
          value={username}
        />
        <InputComponent
          testID="PasswordInput.LoginScreen"
          placeholder={'Password'}
          setValue={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <ButtonComponent
        placeholder={'Login'}
        onPress={() => navigation.navigate('WelcomeScreen')}
      />
    </View>
  );
};

export default LoginScreen;
