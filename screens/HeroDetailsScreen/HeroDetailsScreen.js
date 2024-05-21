import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {colors, styles} from '../../style';
import {heroDetailsScreenStyles} from './HeroDetailsScreenStyle';
import HeroAppearanceDetailsComponent from '../../components/HeroAppearanceDetailsComponent/HeroAppearanceDetailsComponent';
import PowerStatsDetailColumnsComponent from '../../components/PowerStatsDetailColumnComponent/PowerStatsDetailColumnsComponent';

const HeroDetailsScreen = ({route, navigation}) => {
  const {hero} = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [hero]);
  return (
    <View
      style={[styles.container, heroDetailsScreenStyles.container]}
      testID="View.HeroDetailsScreen">
      <View style={heroDetailsScreenStyles.containerDetails}>
        <View style={heroDetailsScreenStyles.containerHeroDetails}>
          <Text
            style={heroDetailsScreenStyles.name}
            testID="heroName.HeroDetailsScreen">
            {hero.name}
          </Text>
          {loading && (
            <ActivityIndicator
              style={heroDetailsScreenStyles.loading}
              size={'large'}
              color={colors.blue}
              testID="ActivityIndicator"
            />
          )}
          <Image
            style={[
              heroDetailsScreenStyles.heroImage,
              loading && [heroDetailsScreenStyles.loadingImage],
            ]}
            source={{uri: hero.images.md}}
            onLoad={() => setLoading(false)}
            testID="Image.HeroDetailsScreen"
          />
          <View style={heroDetailsScreenStyles.statsContainerFirst}>
            <HeroAppearanceDetailsComponent
              title="Gender"
              value={hero.appearance.gender}
            />
            <HeroAppearanceDetailsComponent
              title="Race"
              value={hero.appearance.race}
            />
          </View>
        </View>
        <View style={heroDetailsScreenStyles.containerHeroDetails}>
          <Text style={heroDetailsScreenStyles.title}>Power Stats</Text>
          <PowerStatsDetailColumnsComponent hero={hero} />
        </View>
      </View>
    </View>
  );
};

export default HeroDetailsScreen;
