import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {heroesScreenStyles} from './HeroesScreenStyle';
import {styles} from '../../style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {FlatList} from 'react-native-gesture-handler';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
const HeroesScreen = ({navigation}) => {
  const mockData = [
    {
      id: 1,
      name: 'Spiderman',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 2,
      name: 'Hulk',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 3,
      name: 'Ironman',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 4,
      name: 'Doctor Strange',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 5,
      name: 'Black Widow',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 6,
      name: 'Thanos',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 7,
      name: 'Captain America',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
    {
      id: 8,
      name: 'Black Panther',
      image:
        'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [slicedData, setSlicedData] = useState(mockData.slice(0, 4));
  const renderItem = ({item}) => {
    return (
      <HeroComponent item={item} navigation={navigation} showAll={showAll} />
    );
  };

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
    if (!showAll) {
      setSlicedData(mockData);
    } else {
      setSlicedData(mockData.slice(0, 4));
    }
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
      </View>
    </View>
  );
};

export default HeroesScreen;
