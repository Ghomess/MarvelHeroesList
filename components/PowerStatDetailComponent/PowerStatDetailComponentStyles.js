import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const powerStatDetailComponentStyles = StyleSheet.create({
  textContainer: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '8%',
    width: '50%',
  },
  description: {
    fontSize: 15,
    color: colors.white,
  },
  descriptionTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: '2%',
  },
});
