import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HeroesScreen from '../screens/HeroesScreen/HeroesScreen';
import HeroDetailsScreen from '../screens/HeroDetailsScreen/HeroDetailsScreen';

import {colors} from '../style';

import LogoutButton from '../components/LogoutButton/LogoutButton';

const Stack = createStackNavigator();
const StackNavigator = () => {
  // Arrow function that returns <LogoutButton />
  const headerRightComponent = () => <LogoutButton />;
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.red,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
          headerLeft: () => null,
          headerRight: headerRightComponent,
        }}
      />
      <Stack.Screen
        name="HeroesScreen"
        component={HeroesScreen}
        options={{
          title: 'Heroes',
          headerRight: headerRightComponent,
        }}
      />
      <Stack.Screen
        name="HeroDetailsScreen"
        component={HeroDetailsScreen}
        options={{
          title: 'Hero Details',
          headerRight: headerRightComponent,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
