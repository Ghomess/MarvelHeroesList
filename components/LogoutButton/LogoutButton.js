import React from 'react';
import {TouchableOpacity} from 'react-native';
import {logoutButtonStyles} from './LogoutButtonStyle';

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {colors} from '../../style';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../redux/reducers/authSlicer';
const LogoutButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logoutFunction = () => {
    dispatch(logout());
    navigation.navigate('LoginScreen');
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
