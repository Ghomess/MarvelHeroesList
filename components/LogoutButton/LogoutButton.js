import React from 'react';
import {TouchableOpacity} from 'react-native';
import {logoutButtonStyles} from './LogoutButtonStyle';

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {colors} from '../../style';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../redux/reducers/authSlicer';

//LogoutButton - A styled component that renders a touchable opacity with an icon.
//It's function is to display an icon button on every screen except login, when pressed it changes the auth state in redux to false and redirects the user to the login screen.

const LogoutButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //function to change the auth state in redux to false and to redirect the user to the login screen.
  const logoutFunction = () => {
    dispatch(logout());
    navigation.replace('LoginScreen');
  };
  return (
    <TouchableOpacity
      onPress={logoutFunction}
      style={logoutButtonStyles.button}
      testID="Button.LogoutButton">
      <AntDesignIcons name="logout" size={24} color={colors.white} />
    </TouchableOpacity>
  );
};
export default LogoutButton;
