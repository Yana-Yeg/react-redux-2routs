import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCardsApi,
} from 'utils/fetchApi';

export const getCards = createAsyncThunk(
  'cards/get',
  async (_, thunkApi) => {
    try {
      const cards = await getCardsApi();
      return cards;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

