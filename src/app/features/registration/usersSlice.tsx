import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type User = {
  user: string;
  pwd: string;
  id: string;
};

type StateType = User[];

const initialState: StateType = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: {
      reducer(state, action: PayloadAction<User>) {
        state.push(action.payload);
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
  },
});

export const { createUser } = usersSlice.actions;
export default usersSlice.reducer;
