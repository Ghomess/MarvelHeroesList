import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      console.log('Login', true);
      state.isAuthenticated = true;
    },
    logout: state => {
      console.log('Logout', false);
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
