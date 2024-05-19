import {StyleSheet} from 'react-native';

export const colors = {
  red: '#a50000',
  blue: '#3268bd',
  green: '#00991f',
  gray: '#999999',
  white: '#ffffff',
  purple: '#460061',
  black: '#000000',
};
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
