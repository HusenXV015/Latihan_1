import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  favourites: [],
  loading: false,
  error: '',
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    fetchFavouritesPending: (state) => {
      state.loading = true;
      state.favourites = [];
      state.error = '';
    },
    fetchFavouritesSuccess: (state, action) => {
      state.loading = false;
      state.favourites = action.payload;
      state.error = '';
    },
    fetchFavouritesError: (state, action) => {
      state.loading = false;
      state.favourites = [];
      state.error = action.payload;
    },
  },
});

export const { fetchFavouritesPending, fetchFavouritesSuccess, fetchFavouritesError } = favouriteSlice.actions;

export const fetchFavouritesAsync = (url) => async (dispatch) => {
  try {
    dispatch(fetchFavouritesPending());
    const { data } = await axios.get(`${url}/favourites`, {
      headers: { Authorization: `Bearer ${localStorage.access_token}` },
    });
    dispatch(fetchFavouritesSuccess(data));
  } catch (error) {
    dispatch(fetchFavouritesError(error.response?.data?.error || error.message));
  }
};

export default favouriteSlice.reducer;
