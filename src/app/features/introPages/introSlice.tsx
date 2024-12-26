import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type StateType = {
  intro: number;
};

const initialState: StateType = {
  intro: 0,
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    incrementIntro: (state) => {
      state.intro += 1;
    },
    decrementIntro: (state) => {
      state.intro -= 1;
    },
  },
});

export const introPage = (state: RootState) => state.intro.intro;

export const { incrementIntro, decrementIntro } = introSlice.actions;

export default introSlice.reducer;
