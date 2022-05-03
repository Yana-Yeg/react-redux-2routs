import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
