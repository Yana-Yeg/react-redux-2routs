import { createSlice } from "@reduxjs/toolkit";
import { getTriangleSurface, getCircleDiameter } from "./countOperations";

const countSlice = createSlice({
  name: "count",
  initialState: {
    countResult: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getTriangleSurface.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getTriangleSurface.fulfilled]: (state, { payload }) => ({
      ...state,
      countResult: payload,
      isLoading: false,
    }),
    [getTriangleSurface.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [getCircleDiameter.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getCircleDiameter.fulfilled]: (state, { payload }) => ({
      ...state,
      countResult: payload,
      isLoading: false,
    }),
    [getCircleDiameter.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export default countSlice.reducer;
