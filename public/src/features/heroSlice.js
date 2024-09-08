import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  heroes: [],
  loading: false,
  error: '',
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    fetchHeroesPending: (state) => {
      state.loading = true;
      state.heroes = [];
      state.error = '';
    },
    fetchHeroesSuccess: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
      state.error = '';
    },
    fetchHeroesError: (state, action) => {
      state.loading = false;
      state.heroes = [];
      state.error = action.payload;
    },
  },
});

export const { fetchHeroesPending, fetchHeroesSuccess, fetchHeroesError } = heroSlice.actions;

export const fetchHeroesAsync = (url) => async (dispatch) => {
  try {
    dispatch(fetchHeroesPending());
    const { data } = await axios.get(`${url}/heroes`, {
      headers: { Authorization: `Bearer ${localStorage.access_token}` },
    });
    dispatch(fetchHeroesSuccess(data));
  } catch (error) {
    dispatch(fetchHeroesError(error.response?.data?.error || error.message));
  }
};

export default heroSlice.reducer;
