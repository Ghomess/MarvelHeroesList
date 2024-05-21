import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {heroesScreenStyles} from './HeroesScreenStyle';
import {colors, styles} from '../../style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {FlatList} from 'react-native-gesture-handler';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import {superHeroesApi} from '../../api/superHeroesApi';

const HeroesScreen = ({navigation}) => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState();
  const [slicedData, setSlicedData] = useState([]);

  const toggleShowAll = () => {
    setLoading(true);
    setShowAll(prevShowAll => !prevShowAll);
  };

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const heroesData = await superHeroesApi();

        //check for errors if they exist it goes back to welcome screen
        if (heroesData?.message) {
          navigation.goBack();
        } else {
          setHeroes(heroesData);

          setSlicedData(heroesData.slice(0, 4));
        }
      } catch (err) {
        setHeroes(err);
      } finally {
        setLoading(false);
      }
    };

    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading && heroes?.length > 0) {
      setSlicedData(showAll ? heroes.slice(0, 8) : heroes.slice(0, 4));
      setLoading(false);
    }
  }, [showAll, heroes, loading]);

  const renderItem = ({item}) => {
    return (
      <HeroComponent item={item} navigation={navigation} showAll={showAll} />
    );
  };

  return (
    <View
      style={[styles.container, heroesScreenStyles.container]}
      testID="View.HeroesScreen">
      <ButtonComponent
        placeholder={showAll ? 'Show Less' : 'Show More'}
        onPress={() => toggleShowAll()}
      />
      <View
        style={
          showAll
            ? heroesScreenStyles.fullHeight
            : heroesScreenStyles.partialHeight
        }>
        {!loading ? (
          <FlatList
            style={heroesScreenStyles.flatList}
            key={showAll ? 'vertical' : 'horizontal'}
            horizontal={!showAll}
            keyExtractor={item => item.id}
            data={slicedData}
            renderItem={renderItem}
            numColumns={showAll ? 2 : 1}
            contentContainerStyle={heroesScreenStyles.flatListContent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator size={'large'} color={colors.red} />
        )}
      </View>
    </View>
  );
};

export default HeroesScreen;
