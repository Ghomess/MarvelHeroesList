import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
