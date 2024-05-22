import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const heroesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatList: {
    flex: 1,
  },
  fullHeight: {
    flex: 1,

    marginTop: '20%',
  },
  partialHeight: {
    height: '50%',

    marginTop: '20%',
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
});
