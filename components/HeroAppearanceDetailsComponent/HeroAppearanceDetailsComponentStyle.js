import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const heroAppearanceDetailsComponentStyles = StyleSheet.create({
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
  heroDetail: {
    alignItems: 'center',
  },
});
