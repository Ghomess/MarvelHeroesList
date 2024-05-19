import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const InputComponentStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    backgroundColor: colors.white,
    marginTop: '10%',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: colors.black,
  },
});
