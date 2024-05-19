import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const HeroComponentStyles = StyleSheet.create({
  containerFullHeight: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.red,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    aspectRatio: 0.8,
    width: '50%',
    maxWidth: 160,
  },
  containerPartialHeight: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.red,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    aspectRatio: 0.8,
    height: '100%',
  },
  heroImage: {
    width: '100%',
    height: '70%', // Adjusted to leave space for the text
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
});
