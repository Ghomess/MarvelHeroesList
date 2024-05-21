import {REACT_APP_API_KEY} from '@env';

import {Alert} from 'react-native';
export async function superHeroesApi() {
  const url = 'https://superhero-search.p.rapidapi.com/api/heroes';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    data?.message && Alert.alert('Bad news', data.message);
    //the API returns a list of 20 random heroes, which can be all from Marvel or none

    //filter the heroes by their universe, in this case filter if they are in the Marvel Universe
    /*  const marvelHeroes = data.filter(
      hero => hero.biography.publisher === 'Marvel Comics',
    ); */
    return data;
  } catch (error) {
    Alert.alert('Bad news', error);
  }
}
