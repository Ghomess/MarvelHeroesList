import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const ButtonComponentStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '50%',

    textAlign: 'center',

    alignItems: 'center',
    backgroundColor: colors.red,
    marginTop: '10%',
    borderRadius: 20,
    padding: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.white,
  },
});
