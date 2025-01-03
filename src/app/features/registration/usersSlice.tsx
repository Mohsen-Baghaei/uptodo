import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type User = {
  user: string;
  pwd: string;
  id: string;
};

const initialState: User = {
  user: "",
  pwd: "",
  id: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: {
      reducer(state, action: PayloadAction<User>) {
        state = action.payload;
      },
      prepare(user: string, pwd: string) {
        return {
          payload: {
            id: nanoid(),
            user,
            pwd,
          },
        };
      },
    },
    changeUserName: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { createUser } = usersSlice.actions;

export const getUser = (state: RootState) => state.users;

export default usersSlice.reducer;
