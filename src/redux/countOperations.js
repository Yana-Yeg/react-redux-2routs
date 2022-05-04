import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTria, fetchCircle } from "../utils/someFetch";

export const getTriangleSurface = createAsyncThunk(
  "/count/getTriangleSurface",
  async (values, thunkApi) => {
    try {
      // const count = await fetchTria({ values });
      const { valueA, valueB, valueC } = values;
      const count = (Number(valueA) + Number(valueB) + Number(valueC)) / 2;
      return count;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCircleDiameter = createAsyncThunk(
  "/count/getCircleDiameter",
  async (values, thunkApi) => {
    try {
      // const count = await fetchCircle(value);
      const { valueA } = values;
      const count = Number(valueA) * 2;
      return count;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
