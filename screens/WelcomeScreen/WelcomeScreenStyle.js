import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const welcomeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: '90%',
    height: '30%',
    marginTop: '15%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
