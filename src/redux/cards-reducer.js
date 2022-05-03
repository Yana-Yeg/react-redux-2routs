import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter, changeFilterTarget } from './cards-actions';
import { getCards } from './cards-operations';

const itemsReducer = createReducer([], {
  [getCards.fulfilled]: (_, { payload }) => payload,
});

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
//   [changeFilterTarget]: (_, { payload }) => payload,
// });

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getCards.rejected]: setError,
  [getCards.pending]: resetError,
});

export default combineReducers({
  items: itemsReducer,
  // filter: filterReducer,
  error: errorReducer,
});
