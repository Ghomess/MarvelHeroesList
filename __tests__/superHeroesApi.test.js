import 'react-native';
import {superHeroesApi} from '../api/superHeroesApi';

describe('auth Api', () => {
  test('auth Api works', async () => {
    const authResult = await superHeroesApi();
    expect(authResult.length).toBeGreaterThan(0);
  });
});
