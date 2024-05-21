import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const heroDetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },

  containerDetails: {
    justifyContent: 'space-evenly',
    backgroundColor: colors.red,
    alignItems: 'center',
    padding: '10%',
    borderRadius: 10,
    margin: 7,
  },

  containerHeroDetails: {
    alignItems: 'center',

    justifyContent: 'space-evenly',
  },
  heroDetail: {
    alignItems: 'center',
  },
  heroImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: '10%',
  },
  loading: {
    width: 300,
    height: 300,
    marginBottom: '10%',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'left',

    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'left',

    padding: 20,
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
  loadingImage: {
    position: 'absolute',
    opacity: 0,
  },
  statsContainerFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  statsContainerSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '8%',
    width: '50%',
  },
});
