import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../style';
import {welcomeScreenStyles} from './WelcomeScreenStyle';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
const WelcomeScreen = ({navigation}) => {
  return (
    <View
      style={[styles.container, welcomeScreenStyles.container]}
      testID="View.WelcomeScreen">
      <Image
        testID="Image.WelcomeScreen"
        style={welcomeScreenStyles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Universo_Marvel.png',
        }}
      />
      <Text style={welcomeScreenStyles.title} testID="Text.WelcomeScreen">
        Welcome to the {'\n'}
        Marvel Heroes Universe
      </Text>
      <ButtonComponent
        placeholder={'See Heroes'}
        onPress={() => navigation.navigate('HeroesScreen')}
      />
    </View>
  );
};

export default WelcomeScreen;
