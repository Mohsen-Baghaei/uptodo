import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./features/introPages/introSlice";
import usersReducer from "./features/registration/usersSlice";
import settingReducer from "./features/setting/settingSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
    users: usersReducer,
    setting: settingReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
