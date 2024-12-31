import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./features/introPages/introSlice";
import usersReducer from "./features/registration/usersSlice";
import settingReducer from "./features/setting/settingSlice";
import todoReducer from "./features/todo/todosSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
    users: usersReducer,
    setting: settingReducer,
    todo: todoReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
