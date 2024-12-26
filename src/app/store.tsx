import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./features/introPages/introSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
