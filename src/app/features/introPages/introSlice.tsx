import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import intro2 from "../../../assets/img/intero/intro2.png";
import intro3 from "../../../assets/img/intero/intro3.png";
import intro4 from "../../../assets/img/intero/intro4.png";

type StateType = {
  intro: number;
  pageContent: {
    pageNumber: number;
    img: string;
    class: string;
    heading: string;
    content: string;
  }[];
};

const initialState: StateType = {
  intro: 0,
  pageContent: [
    {
      pageNumber: 1,
      img: intro2,
      class: "bg-slate-500 before:bg-slate-50 after:bg-slate-500",
      heading: "Manage your tasks",
      content: "You can easily manage all of your daily tasks in DoMe for free",
    },
    {
      pageNumber: 2,
      img: intro3,
      class: "bg-slate-50 before:bg-slate-500 after:bg-slate-500",
      heading: "Create daily routine",
      content:
        "In Uptod you can create your personalized routine to stay productive",
    },
    {
      pageNumber: 3,
      img: intro4,
      class: "bg-slate-500 before:bg-slate-500 after:bg-slate-50",
      heading: "Orgonaize your tasks",
      content:
        "you can organize your ddaily tasks by adding your tasks into separate",
    },
  ],
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    incrementIntro: (state) => {
      if (state.intro === 3) {
        localStorage.setItem("showIntro", JSON.stringify(false));
      }
      state.intro += 1;
    },
    decrementIntro: (state) => {
      state.intro -= 1;
    },
    skipIntro: (state) => {
      localStorage.setItem("showIntro", JSON.stringify(false));
      state.intro = 4;
    },
  },
});

export const introPage = (state: RootState) => state.intro.intro;

export const selectedPage = (state: RootState) =>
  state.intro.pageContent.find((page) => page.pageNumber === state.intro.intro);

export const { incrementIntro, decrementIntro, skipIntro } = introSlice.actions;

export default introSlice.reducer;
