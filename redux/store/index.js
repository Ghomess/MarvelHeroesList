import {configureStore} from '@reduxjs/toolkit';
import authSlicer from '../reducers/authSlicer';

const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});

export default store;
