import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {heroesScreenStyles} from './HeroesScreenStyle';
import {colors, styles} from '../../style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {FlatList} from 'react-native-gesture-handler';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import {superHeroesApi} from '../../api/superHeroesApi';
import InputComponent from '../../components/InputComponent/InputComponent';

const HeroesScreen = ({navigation}) => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState();
  const [search, setSearch] = useState();
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
    setLoading(true);
  }, [search]);

  useEffect(() => {
    //update data shown while loading
    if (loading && heroes?.length > 0) {
      //checks if the search input value exists
      //filters the data according to the search input value
      //if the search input value doesn't exist, it stores the whole data without filtering
      const filteredHeroes =
        search?.length > 0
          ? heroes.filter(hero =>
              hero.name.toLowerCase().includes(search.toLowerCase()),
            )
          : heroes;
      //stores the number of data to display
      const sliceCount = showAll ? 8 : 4;

      //stores data depending on the showAll number
      setSlicedData(filteredHeroes.slice(0, sliceCount));

      setLoading(false);
    }
  }, [showAll, heroes, loading, search]);

  const renderItem = ({item}) => {
    return (
      <HeroComponent item={item} navigation={navigation} showAll={showAll} />
    );
  };

  return (
    <View
      style={[styles.container, heroesScreenStyles.container]}
      testID="View.HeroesScreen">
      <InputComponent
        placeholder={'Search'}
        value={search}
        setValue={setSearch}
      />
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
          slicedData?.length ? (
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
            <Text style={heroesScreenStyles.text}>
              Someone is creating more heroes...
            </Text>
          )
        ) : (
          <ActivityIndicator size={'large'} color={colors.red} />
        )}
      </View>
    </View>
  );
};

export default HeroesScreen;
