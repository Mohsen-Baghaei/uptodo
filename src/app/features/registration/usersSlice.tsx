import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import astronaut from "../../../assets/img/avatar/astronaut.png";
import robots from "../../../assets/img/avatar/robots.png";
import robot from "../../../assets/img/avatar/robot.png";
import superhero from "../../../assets/img/avatar/superhero.png";
import ninja from "../../../assets/img/avatar/ninja.png";
import kittys from "../../../assets/img/avatar/kittys.png";
import kitty from "../../../assets/img/avatar/kitty.png";
import fear from "../../../assets/img/avatar/fear.png";
import eagle from "../../../assets/img/avatar/eagle.png";
import dog from "../../../assets/img/avatar/dog.png";
import bear from "../../../assets/img/avatar/bear.png";
import cat from "../../../assets/img/avatar/cat.png";
import panda from "../../../assets/img/avatar/panda.png";
import pikachu from "../../../assets/img/avatar/pikachu.png";
import dinosaur from "../../../assets/img/avatar/dinosaur.png";
import chicken from "../../../assets/img/avatar/chicken.png";
import man from "../../../assets/img/avatar/man.png";
import profile from "../../../assets/img/avatar/profile.png";
import boys from "../../../assets/img/avatar/boys.png";
import gamer from "../../../assets/img/avatar/gamer.png";
import hacker from "../../../assets/img/avatar/hacker.png";
import boy from "../../../assets/img/avatar/boy.png";
import detective from "../../../assets/img/avatar/detective.png";
import businessman from "../../../assets/img/avatar/businessman.png";
import professor from "../../../assets/img/avatar/professor.png";
import grandfather from "../../../assets/img/avatar/grandfather.png";
import womansssss from "../../../assets/img/avatar/womansssss.png";
import avatardesign from "../../../assets/img/avatar/avatardesign.png";
import girlssss from "../../../assets/img/avatar/girlssss.png";
import girl from "../../../assets/img/avatar/girl.png";
import womans from "../../../assets/img/avatar/womans.png";
import woman from "../../../assets/img/avatar/woman.png";
import womanss from "../../../assets/img/avatar/womanss.png";
import avatarhi from "../../../assets/img/avatar/avatarhi.png";
import girls from "../../../assets/img/avatar/girls.png";
import womansss from "../../../assets/img/avatar/womansss.png";
import womanssss from "../../../assets/img/avatar/womanssss.png";
import businesswoman from "../../../assets/img/avatar/businesswoman.png";
import girlsss from "../../../assets/img/avatar/girlsss.png";
import girlss from "../../../assets/img/avatar/girlss.png";
import gamers from "../../../assets/img/avatar/gamers.png";

export const avatars: string[] = [
  astronaut,
  robots,
  robot,
  superhero,
  ninja,
  kittys,
  kitty,
  fear,
  eagle,
  dog,
  bear,
  cat,
  panda,
  pikachu,
  dinosaur,
  chicken,
  man,
  profile,
  boys,
  gamer,
  hacker,
  boy,
  detective,
  businessman,
  professor,
  grandfather,
  womansssss,
  avatardesign,
  girlssss,
  girl,
  womans,
  woman,
  womanss,
  avatarhi,
  girls,
  womansss,
  womanssss,
  businesswoman,
  girlsss,
  girlss,
  gamers,
];

type User = {
  user: string;
  pwd: string;
  id: string;
  avatar: string;
  error: string;
  loggedin: boolean;
};

const initialState: User =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user")!)
    : {};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const { user, pwd } = action.payload;
      state.id = nanoid();
      state.avatar = astronaut;
      state.user = user;
      state.pwd = pwd;
      state.loggedin = false;
      state.error = "";
      localStorage.setItem("user", JSON.stringify(state));
    },
    changeUserName: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    handleLogin: (state, action) => {
      const { user, pwd } = action.payload;
      const matchUser = state.user === user;
      const matchPwd = state.pwd === pwd;
      if (!matchUser || !matchPwd) {
        state.error = "Invalid UserName or Password";
        return;
      }
      state.error = "";
      state.loggedin = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    changePassword: (state, action) => {
      state.pwd = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { createUser, changeUserName, handleLogin, changePassword } =
  usersSlice.actions;

export const getUser = (state: RootState) => state.users;

export default usersSlice.reducer;
