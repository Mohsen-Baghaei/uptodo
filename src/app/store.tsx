import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./features/introPages/introSlice";
import usersReducer from "./features/registration/usersSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
    users: usersReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
