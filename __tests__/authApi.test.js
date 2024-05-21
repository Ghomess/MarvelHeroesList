import 'react-native';

import {authApi} from '../api/authApi';

describe('auth Api', () => {
  test('auth Api works', async () => {
    const authResult = await authApi();
    expect(authResult).toBe(true);
  });
});
