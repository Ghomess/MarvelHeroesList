import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
