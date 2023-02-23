import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  value: [{ id: number; name: string; username: string }];
}

const initialState: UserState = {
  value: [
    {
      id: 0,
      name: "user",
      username: "user",
    },
  ],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state: UserState, action) => {
      state.value.push({
        id: state.value[state.value.length - 1].id + 1,
        ...action.payload.value,
      });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
