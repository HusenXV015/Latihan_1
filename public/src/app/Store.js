import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../features/heroSlice';
import favouriteReducer from '../features/favoriteSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    favourite: favouriteReducer,
  },
});
