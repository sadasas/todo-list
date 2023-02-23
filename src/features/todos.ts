import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  value: [{ id: number; content: string }];
}

const initialState: TodoState = {
  value: [
    {
      id: 0,
      content: "",
    },
  ],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action) => {
      state.value.push({
        id: state.value[state.value.length - 1].id + 1,
        ...action.payload.value,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
